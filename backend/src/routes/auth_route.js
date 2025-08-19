import express from "express"
import { login, logout, signup, updateprofile, checkAuth } from "../controllers/auth_controller.js";
import {protectRoute} from "../middleware/auth_middleware.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.put("/update-profile", protectRoute, updateprofile);

router.get("/check", protectRoute, checkAuth)

export default router;
