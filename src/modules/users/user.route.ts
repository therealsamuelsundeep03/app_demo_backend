import { Router, Request, Response } from "express";
import { randomInt } from "crypto";
import { createUser, findUserByPhone, updateLastLogin, updateUserOTP } from "./user.db";

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
    await updateLastLogin(user._id);

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

export default router;
