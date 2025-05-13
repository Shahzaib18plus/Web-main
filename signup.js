import express from "express";
const router = express.Router();

router.post("/signup", (req, res) => {
    const { fullname, email, phone, password } = req.body;
    // TODO: Save user to database (this is just a placeholder)
    console.log("New user:", { fullname, email, phone, password });
    // Respond with success
    res.json({ success: true });
});

export default router;