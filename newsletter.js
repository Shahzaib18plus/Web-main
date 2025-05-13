import express from "express";
const router = express.Router();

router.post("/subscribe", (req, res) => {
    const { email } = req.body;
    // Save email or send to newsletter service here
    console.log("Newsletter subscription:", email);
    res.json({ success: true });
});

export default router;