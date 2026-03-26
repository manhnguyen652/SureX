const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3000';

type ApiErrorBody = {
  message?: string | string[];
  error?: string;
};

function getErrorMessage(body: ApiErrorBody, fallback: string) {
  if (Array.isArray(body.message)) return body.message.join(', ');
  if (typeof body.message === 'string') return body.message;
  if (typeof body.error === 'string') return body.error;
  return fallback;
}

async function request<T>(path: string, payload: Record<string, unknown>): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = (await res.json().catch(() => ({}))) as T & ApiErrorBody;

  if (!res.ok) {
    throw new Error(getErrorMessage(data, 'Đã có lỗi xảy ra, vui lòng thử lại.'));
  }

  return data;
}

export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginResponse = {
  message: string;
  access_token: string;
  user: {
    id: number;
    email: string;
    fullname: string;
    balance: number;
    role: string;
  };
};

export type RegisterPayload = {
  email: string;
  password: string;
  fullname: string;
};

export type RegisterResponse = {
  message: string;
};

export function loginApi(payload: LoginPayload) {
  return request<LoginResponse>('/auth/login', payload);
}

export function registerApi(payload: RegisterPayload) {
  return request<RegisterResponse>('/auth/register', payload);
}
