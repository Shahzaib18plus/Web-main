import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import newsletterRouter from "./newsletter.js";
import signupRouter from "./signup.js";
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { createRequire } from "module";
import dotenv from "dotenv";
dotenv.config();
const require = createRequire(import.meta.url);
const serviceAccount = require("./illume-libaas-firebase-adminsdk-fbsvc-50cbf1bb9b.json");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:5173" })); // Allow React frontend
app.use(express.json());
app.use("/api", newsletterRouter);
app.use("/api", signupRouter);

// Initialize Firebase Admin SDK (only once)
initializeApp({
  credential: cert(serviceAccount),
  projectId: process.env.FIREBASE_PROJECT_ID
});
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  console.log("POST /api/contact called");
  console.log("Received data:", { name, email, message });

  // Setup transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Use Gmail App Password!
    },
  });

  // Mail options for admin
  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `New Contact Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Mail options for customer
  const customerMailOptions = {
    from: process.env.EMAIL_USER,      // your email
    to: email,                                // customer's email from the form
    replyTo: process.env.EMAIL_USER,
    subject: `Thank you for contacting Illume Libaas`,
    text: `Dear ${name},\n\nThank you for reaching out! We have received your message:\n\n"${message}"\n\nWe will get back to you soon.\n\nBest regards,\nIllume Libaas Team`,
  };

  try {
    const adminInfo = await transporter.sendMail(adminMailOptions);
    console.log("Admin email sent:", adminInfo.response);

    const customerInfo = await transporter.sendMail(customerMailOptions);
    console.log("Customer email sent:", customerInfo.response);

    res.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Forgot Password Endpoint
app.post("/api/forgot-password", async (req, res) => {
  const { email } = req.body;
  // TODO: Lookup user in your database and generate a reset token
  // For demo, just send a fake email if email is provided

  if (!email) {
    return res.status(400).json({ message: "Email is required." });
  }

  // Setup transporter (reuse your existing transporter config)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Use Gmail App Password!
    },
  });

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Password Reset Request",
    text: `You requested a password reset. (This is a demo email)\n\nIf this was not you, please ignore this email.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "If this email exists, a reset link will be sent." });
  } catch (error) {
    console.error("Error sending reset email:", error);
    res.status(500).json({ message: "Failed to send reset email." });
  }
});

app.post("/api/order", async (req, res) => {
  const { contact, delivery, cart, total } = req.body;

  // Setup Firestore
  const db = getFirestore();

  try {
    // Save order to Firestore
    const orderRef = await db.collection("orders").add({
      contact,
      delivery,
      cart,
      total,
      createdAt: new Date(),
    });

    // Setup transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Build HTML for products
    const productRows = cart.map(item => `
      <tr>
        <td><img src="${item.imageurl}" alt="${item.productName}" width="80" style="border-radius:8px;border:1px solid #eee;" /></td>
        <td>${item.productName}</td>
        <td>${item.quantity}</td>
        <td>Rs.${item.saleprice?.toLocaleString()} PKR</td>
        <td>Rs.${(item.saleprice * item.quantity).toLocaleString()} PKR</td>
      </tr>
    `).join("");

    const htmlBody = `
      <h2>Thank you for your order!</h2>
      <p>Order ID: <b>${orderRef.id}</b></p>
      <table border="0" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          ${productRows}
        </tbody>
      </table>
      <p><b>Grand Total:</b> Rs.${total.toLocaleString()} PKR</p>
      <p>We will process your order soon.<br>Best regards,<br>Illume Collection Team</p>
    `;

    const mailOptions = {
      from: '"Illume Collection" <' + process.env.EMAIL_USER + '>',
      to: contact.email,
      subject: "Order Confirmation - Illume Collection",
      html: htmlBody,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, orderId: orderRef.id });
  } catch (error) {
    console.error("Order error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
