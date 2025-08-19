import express from "express";
import { protectRoute} from "../middleware/auth_middleware.js";
import { getMessages, getUserForSidebar, sendmessage } from "../controllers/message_controller.js";

const router = express.Router();



router.get("/users", protectRoute, getUserForSidebar)
router.get("/:id", protectRoute, getMessages)

router.post("/send/:id", protectRoute, sendmessage)

export default router;