# SureX - Nền Tảng Giao Dịch Trung Gian (Escrow Platform) 🛡️

SureX là một nền tảng web ứng dụng mô hình Escrow (giao dịch trung gian), được thiết kế để bảo vệ an toàn tài chính cho cả Người mua và Người bán trong các giao dịch tài khoản số. Hệ thống sẽ giữ tiền của người mua và chỉ giải ngân cho người bán khi cả hai bên đã hoàn tất và xác nhận giao dịch thành công.

## 🌟 Tính Năng Nổi Bật (Key Features)

* **Giao Dịch An Toàn (Escrow System):** Tiền được hệ thống "đóng băng" an toàn cho đến khi người mua kiểm tra và nhận tài khoản thành công.
* **Xử Lý Tranh Chấp (Dispute Resolution):** Tính năng "Báo cáo lỗi" (Tài khoản sai mật khẩu, bị khóa...). Trạng thái giao dịch sẽ chuyển sang tranh chấp, Admin sẽ can thiệp thông qua hệ thống Chat Real-time.
* **Thanh Toán Tự Động:** Tích hợp API ngân hàng/ví điện tử (VNPay/Momo/VietQR) để tự động nhận diện nạp/rút tiền.
* **Real-time Notifications:** Thông báo tức thì khi trạng thái giao dịch thay đổi (đã thanh toán, đã giao acc, hoàn tất) sử dụng WebSockets.
* **Dashboard Quản Trị:** Giao diện quản lý toàn diện cho Admin (quản lý user, giao dịch, duyệt yêu cầu rút tiền).

## 💻 Công Nghệ Sử Dụng (Tech Stack)

Dự án được xây dựng theo kiến trúc Microservices cơ bản / Client-Server tách biệt để đảm bảo hiệu suất và khả năng mở rộng.

**Frontend:**
* **Framework:** Next.js (React) - Tối ưu SEO và tốc độ tải trang.
* **State Management:** Redux Toolkit & RTK Query - Quản lý state luồng giao dịch và fetch API.
* **Styling:** Tailwind CSS & Shadcn UI (hoặc Ant Design).

**Backend:**
* **Framework:** NestJS (Node.js & TypeScript) - Đảm bảo kiến trúc chặt chẽ, dễ bảo trì.
* **Database:** PostgreSQL - RDBMS đảm bảo tính toàn vẹn dữ liệu (ACID) cho giao dịch tài chính.
* **Caching & Real-time:** Redis & Socket.io - Quản lý phiên, cache dữ liệu hot và xử lý Chat/Thông báo thời gian thực.

## 🚀 Hướng Dẫn Cài Đặt (Getting Started)

### Yêu cầu hệ thống (Prerequisites)
* Node.js (v18 trở lên)
* PostgreSQL (v14 trở lên)
* Git

### Cài đặt Frontend
\`\`\`bash
# 1. Clone repository
git clone https://github.com/your-username/surex-frontend.git

# 2. Di chuyển vào thư mục
cd surex-frontend

# 3. Cài đặt các dependencies
npm install

# 4. Khởi động môi trường phát triển
npm run dev
\`\`\`
*Frontend sẽ chạy tại địa chỉ: `http://localhost:3000`*

### Cài đặt Backend
\`\`\`bash
# 1. Clone repository
git clone https://github.com/your-username/surex-backend.git

# 2. Di chuyển vào thư mục
cd surex-backend

# 3. Cài đặt các dependencies
npm install

# 4. Cấu hình biến môi trường
# Tạo file .env dựa trên .env.example và điền các thông số Database, JWT Secret, v.v.
cp .env.example .env

# 5. Chạy server
npm run start:dev
\`\`\`
*API Server sẽ chạy tại địa chỉ: `http://localhost:8080`*

## 📜 Luồng Giao Dịch Cơ Bản (Transaction Flow)
1. **PENDING:** Người mua đặt hàng, chờ thanh toán.
2. **PAID (Hold):** Người mua đã thanh toán, tiền vào ví trung gian SureX.
3. **DELIVERED:** Người bán giao thông tin tài khoản (chứa trong vùng bảo mật).
4. **COMPLETED / DISPUTED:** - *Completed:* Người mua xác nhận tài khoản chuẩn -> Tiền cộng vào ví người bán.
   - *Disputed:* Người mua báo lỗi -> Admin vào giải quyết.

## 🧑‍💻 Tác giả (Author)
* **[Tên của bạn]** - *Frontend/Fullstack Developer*

---
*Dự án được xây dựng với mục đích học tập và áp dụng công nghệ vào thực tiễn.*
