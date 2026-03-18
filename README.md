# 📚 Hệ Thống Quản Lý Mượn Sách

**Họ và tên:** Huỳnh Thanh Bình  
**MSSV:** B2111831  
**Lớp học phần:** CT44901

---

## 📖 Giới thiệu

Hệ thống Quản Lý Mượn Sách là một ứng dụng web cho phép quản lý thư viện bao gồm quản lý sách, độc giả, nhà xuất bản, nhân viên và theo dõi việc mượn/trả sách. Ứng dụng phân quyền giữa **admin** và **user** với các chức năng tương ứng.

---

## 🛠️ Công nghệ sử dụng

| Thành phần   | Công nghệ                          |
| ------------ | ---------------------------------- |
| **Frontend** | Vue 3, Vite, Bootstrap, VeeValidate, Yup |
| **Backend**  | Node.js, Express.js                |
| **Database** | MongoDB                            |
| **Xác thực** | JWT (JSON Web Token), bcrypt       |

---

## ⚙️ Hướng dẫn cài đặt

### Yêu cầu hệ thống
- **Node.js** >= 16.x
- **npm** >= 8.x
- **MongoDB** (local hoặc MongoDB Atlas)
- **Git**

### 1. Clone dự án

```bash
git clone <repository-url>
cd quanlymuonsach
```

### 2. Cài đặt Backend

```bash
cd backend
npm install
```

Tạo file `.env` trong thư mục `backend/`:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/quanlymuonsach
JWT_SECRET=your_jwt_secret_key_here
```

### 3. Cài đặt Frontend

```bash
cd ../frontend
npm install
```

### 4. Khởi động MongoDB

Đảm bảo MongoDB đang chạy trên máy local:

```bash
mongod
```

Hoặc sử dụng MongoDB Atlas và cập nhật `MONGODB_URI` trong file `.env`.

### 5. Chạy ứng dụng

**Backend**:

```bash
cd backend
npm start
```

**Frontend**:

```bash
cd frontend
npm run dev
```

## Cơ sở dữ liệu

| Collection        | Mô tả                    |
| ----------------- | ------------------------- |
| `users`           | Tài khoản người dùng      |
| `DocGia`          | Thông tin độc giả          |
| `Sach`            | Thông tin sách             |
| `NhaXuatBan`      | Thông tin nhà xuất bản     |
| `NhanVien`        | Thông tin nhân viên        |
| `TheoDoiMuonSach` | Bản ghi mượn/trả sách     |
