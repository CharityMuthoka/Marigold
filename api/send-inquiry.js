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

    const transporter = createTransporter();

    await transporter.sendMail({
      from: `"Marigold & Ember Website" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVING_EMAIL,
      replyTo: email,
      subject: "New Event Inquiry from Marigold & Ember Website",
      html: `
        <h2>New Event Inquiry</h2>

        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Event Type:</strong> ${escapeHtml(event_type)}</p>
        <p><strong>Target Date:</strong> ${escapeHtml(target_date)}</p>
        <p><strong>Event Location:</strong> ${escapeHtml(event_location)}</p>
        <p><strong>Estimated Guests:</strong> ${escapeHtml(guest_count)}</p>
        <p><strong>Estimated Budget:</strong> ${escapeHtml(budget)}</p>

        <h3>Message</h3>
        <p>${escapeHtml(message)}</p>
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
};