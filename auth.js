const express = require("express");
const router = express.Router();

// Dummy user database
const users = [{ email: "test@example.com" }];

router.post("/forgot-password", (req, res) => {
  const { email } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(200).json({ message: "If this email exists, a reset link will be sent." });
  }
  // Here, send an email with a reset link (implement with nodemailer in production)
  // For now, just simulate:
  return res.status(200).json({ message: "Password reset link sent to your email." });
});

module.exports = router;