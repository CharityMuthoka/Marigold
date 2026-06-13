const nodemailer = require("nodemailer");

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
  }

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

    const transporter = createTransporter();

    await transporter.sendMail({
      from: `"Marigold & Ember Website" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVING_EMAIL,
      replyTo: email,
      subject: "New Detailed Event Inquiry from Marigold & Ember Website",
      html: `
        <h2>New Detailed Event Inquiry</h2>

        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p><strong>Event Type:</strong> ${escapeHtml(eventType)}</p>
        <p><strong>Event Date:</strong> ${escapeHtml(
          flexibleDate ? "Flexible date" : eventDate
        )}</p>
        <p><strong>Guest Count:</strong> ${escapeHtml(guestCount)}</p>
        <p><strong>Budget:</strong> ${escapeHtml(budget)}</p>
        <p><strong>Preferred Style:</strong> ${escapeHtml(
          Array.isArray(style) && style.length
            ? style.join(", ")
            : "Not selected"
        )}</p>

        <h3>Client Vision</h3>
        <p>${escapeHtml(vision || "Not provided")}</p>
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
};