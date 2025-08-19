import User from "../models/user_model.js"
import bcrypt from "bcryptjs"
import { generateTokens } from "../lib/utils.js"
import cloudinary from "../lib/cloudinary.js";

export const signup = async (req,res) => {
   const {fullName, email, password} = req.body;
   try{
    console.log("Signup attempt:", { fullName, email, passwordLength: password?.length });
    
    if(!fullName || !email || !password){
        return res.status(400).json({message: "All fields are required"})
    }
    //hash passwords
    if(password.length < 6){
        return res.status(400).json({message: "password must be atleast 6 characters"})
    }

    const user = await User.findOne({email})

    if (user)  return res.status(400).json({message: "Email already exists"});
    
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt)  // Actual password=1234 => abgd_yur93pi3fjo

    console.log("Creating new user with:", { fullName, email });
    const newUser = new User({
        fullName,
        email,
        password: hashedpassword
    })

    if(newUser){

        //generate jwt token
        generateTokens(newUser._id, res);
        await newUser.save();
        console.log("User created successfully:", newUser._id);

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            email: newUser.email,
            profilePic: newUser.profilePic,
        });  
    } else {
        res.status(400).json({message: "Invalid user data"});
    }
   } catch (error) {
        console.log("Error in signup controller", error.message);
        console.log("Full error:", error);
        res.status(500).json({message: "Internal Server Error"});
   }
};

export const login = async (req,res) => {
    const { email, password } = req.body
try {
    const user = await User.findOne({email})

    if(!user) {
         return res.status(400).json({message: "Invalid credentials"})
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password)
    if(!isPasswordCorrect) {
        return res.status(400).json({message: "Invalid credentials"})
    }

    generateTokens(user._id, res);
    res.status(200).json({
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        profilePic: user.profilePic,
    })
} catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({message: "Internal Server Error"});
}   
};

export const logout = (req,res) => {
    try{
        res.cookie("jwt","", {maxAge: 0});
        res.status(200).json({message: "Logged out successfully"});
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
};

export const updateprofile = async (req, res) => {
    try{
        const {profilePic } = req.body;
        const userid = req.user._id;

        if(!profilePic) {
            return res.status(400).json({message: "Profile pic is required"});
        }
        
        const uploadResponse = await cloudinary.uploader.upload(profilePic, {
            resource_type: "auto",
            folder: "chat_app_profiles" // organize uploads in a folder
        });
        
        console.log("Cloudinary upload response:", uploadResponse.secure_url);
        
        const updatedUser = await User.findByIdAndUpdate(userid, {profilePic:uploadResponse.secure_url}, {new:true});
        
        console.log("Updated user profile pic URL:", updatedUser.profilePic);

        res.status(200).json(updatedUser)

    } catch(error){
       console.log("error in update profile:", error);
       res.status(500).json({message: "Internal server error"});
    }
};

export const checkAuth = (req,res) => {
    try {
        res.status(200).json(req.user);
    }catch(error) {
        console.log("Error in checkAuth controller", error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
}

