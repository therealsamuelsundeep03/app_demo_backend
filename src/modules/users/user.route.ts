import { Router, Request, Response } from "express";
import { randomInt } from "crypto";
import { clearUserOTP, createUser, findUserByPhone, findUserByPhoneWithOTP, updateLastLogin, updateUserOTP } from "./user.db";

const router = Router();

router.post("/login", async (req: Request, res: Response) => {
  try {
    const { phone } = req.body;

    if (!phone) {
      return res.status(400).json({ message: "Phone is required" });
    }

    let user = await findUserByPhone(phone);

    if (!user) {
      user = await createUser({ phone });
    }

    if (user.isBlocked) {
      return res.status(403).json({ message: "User is blocked" });
    }

    const otp = randomInt(1000, 10000);

    await updateUserOTP(phone, otp);

    res.json({
      id: user._id,
      phone: user.phone,
      otp
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/verify-otp", async (req: Request, res: Response) => {
  try {
    const { phone, otp } = req.body;

    if (!phone || !otp) {
      return res.status(400).json({ message: "Phone and OTP are required" });
    }

    const user = await findUserByPhoneWithOTP(phone);

    if (!user || !user.otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    if (user.isBlocked) {
      return res.status(403).json({ message: "User is blocked" });
    }
    if (user.otp != otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    await updateLastLogin(user._id);

    res.json({
      id: user._id,
      name: user.name,
      phone: user.phone,
      message: "OTP verified successfully"
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
