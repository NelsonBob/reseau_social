import { Router } from "express";
import { verifyToken } from "../middleware/verify_token";
import * as chat from "../controllers/chat_controller";

const router = Router();

router.get("/chat/getListChatByUser", verifyToken, chat.getListMessagesByUser);
router.get(
  "/chat/getAllMessageByUser/:from",
  verifyToken,
  chat.getAllMessagesByUser
);

export default router;
