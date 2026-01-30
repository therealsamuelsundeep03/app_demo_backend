"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const crypto_1 = require("crypto");
const user_db_1 = require("./user.db");
const router = (0, express_1.Router)();
router.post("/login", async (req, res) => {
    try {
        const { phone } = req.body;
        if (!phone) {
            return res.status(400).json({ message: "Phone is required" });
        }
        let user = await (0, user_db_1.findUserByPhone)(phone);
        if (!user) {
            user = await (0, user_db_1.createUser)({ phone });
        }
        if (user.isBlocked) {
            return res.status(403).json({ message: "User is blocked" });
        }
        const otp = (0, crypto_1.randomInt)(1000, 10000);
        await (0, user_db_1.updateUserOTP)(phone, otp);
        res.json({
            id: user._id,
            phone: user.phone,
            otp
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});
router.post("/verify-otp", async (req, res) => {
    try {
        const { phone, otp } = req.body;
        if (!phone || !otp) {
            return res.status(400).json({ message: "Phone and OTP are required" });
        }
        const user = await (0, user_db_1.findUserByPhoneWithOTP)(phone);
        if (!user || !user.otp) {
            return res.status(400).json({ message: "Invalid OTP" });
        }
        if (user.isBlocked) {
            return res.status(403).json({ message: "User is blocked" });
        }
        if (user.otp != otp) {
            return res.status(400).json({ message: "Invalid OTP" });
        }
        await (0, user_db_1.updateLastLogin)(user._id);
        res.json({
            id: user._id,
            name: user.name,
            phone: user.phone,
            message: "OTP verified successfully"
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.default = router;
