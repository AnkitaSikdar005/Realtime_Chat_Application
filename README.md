# 💬 Realtime Chat Application

A **modern, feature-rich realtime chat platform** built with the **MERN stack** (MongoDB, Express, React, Node.js), **Socket.IO**, **JWT authentication**, **TailwindCSS**, and **DaisyUI**.  
Enjoy **seamless communication** with live messaging, image sharing, user presence, and beautiful customizable themes.  

![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-22.16.0-green?style=for-the-badge&logo=node.js)
![Socket.io](https://img.shields.io/badge/Socket.io-4.8.1-black?style=for-the-badge&logo=socket.io)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-blue?style=for-the-badge&logo=tailwindcss)
![DaisyUI](https://img.shields.io/badge/DaisyUI-4.12-pink?style=for-the-badge&logo=daisyui)

## 🚀 Live Demo

 ### 🧭 Deployed on Render – [Visit the Live Site](https://realtime-chat-application-k01a.onrender.com)



## ✨ Features

### 🎨 **Beautiful UI/UX**
- 🎭 **30+ DaisyUI Themes** – Switch between stunning themes instantly  
- 📱 **Responsive Design** – Perfect on desktop, tablet, and mobile  
- 💬 **Modern Chat Interface** – Clean, intuitive message bubbles and layout  
- 🌗 **Dark/Light Mode** – Easy on the eyes, day or night  

### ⚡ **Real-Time Communication**
- 🚀 **Instant Messaging** – Send & receive messages instantly  
- 🟢 **Live User Presence** – See who’s online with green indicators  
- 📜 **Auto-Scroll** – Never miss the latest messages  
- ⏰ **Message Timestamps** – Know exactly when messages were sent  

### 🔐 **Secure Authentication**
- 🔑 **JWT Authentication** – Token-based secure login system  
- 🛡️ **Password Hashing** – bcrypt encryption for user data protection  
- 🔒 **Protected Routes** – Access restricted chat features safely  
- 🔄 **Session Management** – Automatic login/logout handling  

### 🖼️ **Rich Media**
- 📷 **Image Sharing** – Upload & share images via **Cloudinary**  
- 🧑‍🎨 **Profile Pictures** – Personalize your chat experience  
- ⚡ **Optimized Images** – Fast loading with cloud delivery  

### 🌐 **Modern Tech Stack**
- ⚛️ **React 18** with Hooks & Context API  
- 🔌 **Socket.io** for real-time communication  
- 🗂️ **Zustand** for lightweight state management  
- 🎨 **Tailwind CSS + DaisyUI** for modern UI design  
- 🖥️ **Node.js + Express** backend API  
- 🗄️ **MongoDB Atlas** cloud database  



## 📸 Screenshots

### 🎨 Theme Switching  
🖼️ Switch between **30+ stunning DaisyUI themes** instantly!  
<img width="1800" height="903" alt="image" src="https://github.com/user-attachments/assets/c0f7bdc2-d0a5-4c20-9116-3984e8e0e015" />

---

### 💬 Chat Interface  
💡 A clean, modern **real-time chat layout** with message bubbles, timestamps, and auto-scroll.  
<img width="1910" height="909" alt="image" src="https://github.com/user-attachments/assets/fa491c05-e7d9-4bd0-bd60-6eb9ee7174af" />
 

---



## 🛠️ Tech Stack

### Frontend
```
React 18.3.1          # Modern UI library
DaisyUI 4.12.14       # Beautiful component library
Tailwind CSS 3.4.15  # Utility-first CSS framework
Socket.io-client      # Real-time communication
Zustand              # Lightweight state management
Vite                 # Fast build tool
```

### Backend
```
Node.js              # JavaScript runtime
Express.js 4.19.2    # Web framework
Socket.io 4.8.1      # Real-time engine
MongoDB + Mongoose   # Database and ODM
JWT                  # Authentication tokens
bcryptjs             # Password hashing
Cloudinary           # Image upload service
```

## ⚡ Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account
- Cloudinary account (for image uploads)

### 1. Clone the Repository
```bash
git clone https://github.com/AnkitaSikdar005/Realtime_Chat_Application.git
cd Realtime_Chat_Application
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create `.env` file in backend directory:
```env
MONGODB_URI=your_mongodb_connection_string
PORT=5001
JWT_SECRET=your_secure_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
NODE_ENV=development
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

### 4. Run the Application
```bash
# Start backend (from backend directory)
npm run dev

# Start frontend (from frontend directory)
npm run dev
```

Visit `http://localhost:5173` to see the app! 🎉

## 📁 Project Structure

```
Realtime_Chat_Application/
├── backend/
│   ├── src/
│   │   ├── controllers/     # API route handlers
│   │   ├── middleware/      # Authentication & validation
│   │   ├── models/          # MongoDB schemas
│   │   ├── routes/          # Express routes
│   │   ├── lib/             # Utility functions
│   │   └── index.js         # Server entry point
│   ├── .env                 # Environment variables
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Main app pages
│   │   ├── store/           # Zustand state management
│   │   ├── lib/             # Utility functions
│   │   └── main.jsx         # App entry point
│   ├── public/              # Static assets
│   └── package.json
└── README.md
```

## 🎯 Key Features Breakdown

### ⚡ Real-Time Messaging
- 🔌 **Socket.io Integration** – Instant message delivery  
- 🟢 **Online Users** – Live presence indicators  
- 💾 **Message History** – Persistent chat storage  
- 📜 **Auto-Scroll** – Smooth message navigation  

---

### 🎨 Theme System
- 🎭 **30+ Themes** – From minimalist to vibrant  
- 👀 **Live Preview** – See themes before applying  
- 💾 **Persistent Settings** – Your preferences saved  
- 📱 **Mobile Responsive** – Beautiful on all devices  

---

### 🔐 Authentication Flow
- 📝 **Secure Registration** – Password hashing with bcrypt  
- 🔑 **JWT Tokens** – Stateless authentication  
- 🔒 **Protected Routes** – Secure chat access  
- 🔄 **Auto-Login** – Remember user sessions  

---

### 🖼️ Image Upload
- ☁️ **Cloudinary Integration** – Cloud-based image storage  
- ⚡ **Instant Preview** – See images immediately  
- 🚀 **Optimized Delivery** – Fast-loading images  
- 📲 **Mobile Support** – Upload from any device  


## 🚀 Deployment

### Backend (Render)
1. Connect your GitHub repository
2. Set environment variables
3. Deploy with `npm run start`

### Frontend (Render)
1. Connect your repository
2. Set build command: `npm run build`
3. Set output directory: `dist`

## 👨‍💻 Author

**Ankita Sikdar**
- GitHub: [@AnkitaSikdar005](https://github.com/AnkitaSikdar005)
- LinkedIn: [Your LinkedIn Profile](https://www.linkedin.com/in/ankita-sikdar-70210a253/)

## 🙏 Acknowledgments

- [DaisyUI](https://daisyui.com/) for the beautiful component library
- [Socket.io](https://socket.io/) for real-time communication
- [Cloudinary](https://cloudinary.com/) for image management
- [MongoDB Atlas](https://www.mongodb.com/atlas) for cloud database


---

<div align="left">
  <p>Made with ❤️ by Ankita Sikdar</p>
</div>
