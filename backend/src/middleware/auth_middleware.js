import jwt from "jsonwebtoken";
import User from "../models/user_model.js";

export const protectRoute = async (req, res, next) => {
    try{
       const token = req.cookies.jwt;

       if(!token){
        return res.status(401).json({message: "Unauthorized - No token Provided"})
       }

       const decoded = jwt.verify(token, process.env.JWT_SECRET)

       if(!decoded){
          return res.status(401).json({message: "unauthorized - Invalid Token"}); 
       }

       const user = await User.findById(decoded.userId).select("-password"); // we just keep ou app safe so we  expose our password to unauthorized user

       if(!user){
        return res.status(404).json({message: "User not found"});
       }

       req.user= user
       next() // calling the next function i.e updateprofile

    }catch(error){
      console.log("Error in protectRoute middleware:", error.message);
      res.status(500).json({message: "Internal server error"});
    }
};
