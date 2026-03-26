export type ProductCategory = 'Game' | 'Software' | 'Social';

export type Product = {
  id: number;
  category: ProductCategory;
  title: string;
  price: string;
  priceValue: number;
  seller: string;
  image: string;
  description: string;
  featured?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    category: 'Game',
    title: 'Tài khoản Valorant Rank Cao',
    price: '1,200,000 VNĐ',
    priceValue: 1200000,
    seller: 'Shop Minh Anh',
    image: '/products/pubg-mobile.jpg',
    description: 'Tài khoản rank cao, full thông tin bảo mật, đổi mail được ngay sau khi nhận.',
    featured: true,
  },
  {
    id: 2,
    category: 'Software',
    title: 'Canva Pro 12 tháng',
    price: '750,000 VNĐ',
    priceValue: 750000,
    seller: 'Digital Store',
    image: '/products/adobe-creative.jpg',
    description: 'Gói Canva Pro dành cho cá nhân/doanh nghiệp nhỏ, kích hoạt nhanh trong ngày.',
    featured: true,
  },
  {
    id: 3,
    category: 'Social',
    title: 'Tài khoản TikTok Business',
    price: '2,100,000 VNĐ',
    priceValue: 2100000,
    seller: 'GrowFast Team',
    image: '/products/instagram-business.jpg',
    description: 'Tài khoản đã xây nền, phù hợp chạy quảng cáo và phát triển kênh thương hiệu.',
  },
  {
    id: 4,
    category: 'Game',
    title: 'Steam Account Premium',
    price: '3,200,000 VNĐ',
    priceValue: 3200000,
    seller: 'Người bán C',
    image: '/products/stream-account.jpg',
    description: 'Kho game chất lượng, có nhiều tựa AAA, bàn giao đầy đủ thông tin đăng nhập.',
    featured: true,
  },
  {
    id: 5,
    category: 'Software',
    title: 'Microsoft 365 Family',
    price: '1,050,000 VNĐ',
    priceValue: 1050000,
    seller: 'Office Center',
    image: '/products/adobe-creative.jpg',
    description: 'Giấy phép Microsoft 365 Family chính hãng, hỗ trợ cài đặt và kích hoạt.',
  },
  {
    id: 6,
    category: 'Social',
    title: 'Facebook BM Verified',
    price: '4,500,000 VNĐ',
    priceValue: 4500000,
    seller: 'MediaHub',
    image: '/products/instagram-business.jpg',
    description: 'Business Manager đã xác minh, phù hợp agency và đội nhóm chạy ads chuyên nghiệp.',
    featured: true,
  },
];

export const FEATURED_PRODUCTS = PRODUCTS.filter((product) => product.featured);

export function getProductById(id: number) {
  return PRODUCTS.find((product) => product.id === id);
}
