# 💬 Real-Time Chat Application

A modern, feature-rich real-time chat application built with React.js, Node.js, Socket.io, and MongoDB. Experience seamless communication with beautiful themes, image sharing, and live user presence.

![Chat Application](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-22.16.0-green?style=for-the-badge&logo=node.js)
![Socket.io](https://img.shields.io/badge/Socket.io-4.8.1-black?style=for-the-badge&logo=socket.io)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb)

## ✨ Features

### 🎨 **Beautiful UI/UX**
- **30+ DaisyUI Themes** - Switch between stunning themes instantly
- **Responsive Design** - Perfect on desktop, tablet, and mobile
- **Modern Chat Interface** - Clean, intuitive message bubbles and layout
- **Dark/Light Mode** - Easy on the eyes, day or night

### 💬 **Real-Time Communication**
- **Instant Messaging** - Send and receive messages in real-time
- **Live User Presence** - See who's online with green indicators
- **Auto-Scroll** - Never miss the latest messages
- **Message Timestamps** - Know exactly when messages were sent

### 🔐 **Secure Authentication**
- **JWT Authentication** - Secure token-based login system
- **Password Hashing** - bcrypt encryption for user passwords
- **Protected Routes** - Secure access to chat features
- **Session Management** - Automatic login/logout handling

### 🖼️ **Rich Media**
- **Image Sharing** - Upload and share images via Cloudinary
- **Profile Pictures** - Personalize your chat experience
- **Optimized Images** - Fast loading with cloud optimization

### 🌐 **Modern Tech Stack**
- **React 18** with Hooks and Context API
- **Socket.io** for real-time communication
- **Zustand** for state management
- **Tailwind CSS + DaisyUI** for styling
- **Node.js + Express** backend API
- **MongoDB Atlas** cloud database

## 🚀 Live Demo

🌟 **[Try the Live App](https://your-deployed-app-url.com)** 

## 📱 Screenshots

### Theme Switching
![Theme Demo](https://via.placeholder.com/800x400/4f46e5/ffffff?text=Beautiful+Theme+Switching)

### Chat Interface
![Chat Interface](https://via.placeholder.com/800x400/059669/ffffff?text=Real-Time+Chat+Interface)

### Settings Page
![Settings](https://via.placeholder.com/800x400/dc2626/ffffff?text=Customizable+Settings)

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

### Real-Time Messaging
- **Socket.io Integration**: Instant message delivery
- **Online Users**: Live presence indicators
- **Message History**: Persistent chat storage
- **Auto-Scroll**: Smooth message navigation

### Theme System
- **30+ Themes**: From minimalist to vibrant
- **Live Preview**: See themes before applying
- **Persistent Settings**: Your preferences saved
- **Mobile Responsive**: Beautiful on all devices

### Authentication Flow
- **Secure Registration**: Password hashing with bcrypt
- **JWT Tokens**: Stateless authentication
- **Protected Routes**: Secure chat access
- **Auto-Login**: Remember user sessions

### Image Upload
- **Cloudinary Integration**: Cloud-based image storage
- **Instant Preview**: See images immediately
- **Optimized Delivery**: Fast loading images
- **Mobile Support**: Upload from any device

## 🚀 Deployment

### Backend (Render/Railway)
1. Connect your GitHub repository
2. Set environment variables
3. Deploy with `npm run start`

### Frontend (Vercel/Netlify)
1. Connect your repository
2. Set build command: `npm run build`
3. Set output directory: `dist`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ankita Sikdar**
- GitHub: [@AnkitaSikdar005](https://github.com/AnkitaSikdar005)
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/your-profile)

## 🙏 Acknowledgments

- [DaisyUI](https://daisyui.com/) for the beautiful component library
- [Socket.io](https://socket.io/) for real-time communication
- [Cloudinary](https://cloudinary.com/) for image management
- [MongoDB Atlas](https://www.mongodb.com/atlas) for cloud database

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/AnkitaSikdar005/Realtime_Chat_Application?style=social)
![GitHub forks](https://img.shields.io/github/forks/AnkitaSikdar005/Realtime_Chat_Application?style=social)
![GitHub issues](https://img.shields.io/github/issues/AnkitaSikdar005/Realtime_Chat_Application)
![GitHub license](https://img.shields.io/github/license/AnkitaSikdar005/Realtime_Chat_Application)

---

<div align="center">
  <h3>⭐ Star this repository if you found it helpful!</h3>
  <p>Made with ❤️ by Ankita Sikdar</p>
</div>
