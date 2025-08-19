import axios from "axios";

export const axiosInstance =  axios.create({
   
   baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api" , // ✅ make sure to include /api here because your backend uses /api/auth, /api/messages
    withCredentials: true,
});