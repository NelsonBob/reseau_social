import { Router } from "express";
import * as noti from "../controllers/notifications_controller";
import { verifyToken } from "../middleware/verify_token";

const router = Router();

router.get(
  "/notification/getNotificationsByUser",
  verifyToken,
  noti.getNotificationsByUser
);

export default router;
