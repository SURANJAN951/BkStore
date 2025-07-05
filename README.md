# 📚 Acadmia - Your Personal Digital Library

Acadmia is a modern, user-friendly online platform for book lovers. It allows users to sign up, log in, and access a collection of both **free** and **premium** books in PDF format.

## ✨ Features

- 🔐 **Authentication**: Secure user sign-up and login system.
- 📘 **Free Books**: Instantly download a wide range of free book PDFs.
- 💎 **Premium Books**: Access premium content after subscription or purchase.
- 🔍 **Search & Browse**: Find your favorite books quickly and easily.
- 📄 **Responsive UI**: Seamless experience across desktop and mobile devices.

## 🛠️ Tech Stack

**Frontend**  
- React.js  
- Tailwind CSS  

**Backend**  
- Node.js  
- Express.js  
- MongoDB  

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/SURANJAN951/BkStore.git
   cd BkStore
   ```

2. **Install dependencies**

   📦 For frontend:
   ```bash
   cd client
   npm install
   ```

   🛠 For backend:
   ```bash
   cd ../server
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file inside the `server/` folder:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Start development servers**

   Frontend:
   ```bash
   cd client
   npm run dev
   ```

   Backend:
   ```bash
   cd ../server
   npm run dev
   ```

5. **Visit the app**

   Open your browser and go to:
   ```
   http://localhost:5173
   ```

---

## 🔐 Authentication

- JWT-based authentication
- Passwords hashed using bcrypt
- Secured login/register with token storage

---

## 📚 Book System

- Free books can be downloaded without login
- Premium books require authentication and subscription access
- All books are served as PDF files

---

## ✉️ Contact

- Email: `Ksuranjan951@gmail.com`
- GitHub: [https://github.com/SURANJAN951](https://github.com/SURANJAN951)

---

## 🙌 Contributions

Contributions are welcome! Feel free to open an issue or submit a pull request.

---
