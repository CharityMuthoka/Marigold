const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "http://localhost:8081",
      "https://your-live-website-domain.com",
    ],
  })
);

app.use(express.json());

app.post("/api/send-inquiry", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      event_type,
      target_date,
      event_location,
      guest_count,
      budget,
      message,
    } = req.body;

    if (
      !name ||
      !email ||
      !phone ||
      !event_type ||
      !target_date ||
      !event_location ||
      !guest_count ||
      !budget ||
      !message
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Marigold & Ember Website" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVING_EMAIL,
      replyTo: email,
      subject: "New Event Inquiry from Marigold & Ember Website",
      html: `
        <h2>New Event Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Event Type:</strong> ${event_type}</p>
        <p><strong>Target Date:</strong> ${target_date}</p>
        <p><strong>Event Location:</strong> ${event_location}</p>
        <p><strong>Estimated Guests:</strong> ${guest_count}</p>
        <p><strong>Estimated Budget:</strong> ${budget}</p>

        <h3>Message</h3>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Inquiry sent successfully.",
    });
  } catch (error) {
    console.error("Email sending error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to send inquiry. Please try again later.",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.get("/api/book-call", (req, res) => {
  const phone = process.env.WHATSAPP_PHONE;

  const message = encodeURIComponent(
    "Hello Marigold & Ember, I would like to book a call about an event."
  );

  if (!phone) {
    return res.status(500).send("WhatsApp number is not configured.");
  }

  return res.redirect(`https://wa.me/${phone}?text=${message}`);
});

app.post("/api/send-detailed-inquiry", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      eventDate,
      flexibleDate,
      guestCount,
      budget,
      eventType,
      style,
      vision,
    } = req.body;

    if (!name || !email || !guestCount || !budget || !eventType) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    if (!eventDate && !flexibleDate) {
      return res.status(400).json({
        success: false,
        message: "Please pick a date or mark the date as flexible.",
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Marigold & Ember Website" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVING_EMAIL,
      replyTo: email,
      subject: "New Detailed Event Inquiry from Marigold & Ember Website",
      html: `
        <h2>New Detailed Event Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Event Type:</strong> ${eventType}</p>
        <p><strong>Event Date:</strong> ${
          flexibleDate ? "Flexible date" : eventDate
        }</p>
        <p><strong>Guest Count:</strong> ${guestCount}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Preferred Style:</strong> ${
          Array.isArray(style) && style.length ? style.join(", ") : "Not selected"
        }</p>

        <h3>Client Vision</h3>
        <p>${vision || "Not provided"}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Inquiry sent successfully.",
    });
  } catch (error) {
    console.error("Detailed inquiry error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to send inquiry. Please try again later.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});