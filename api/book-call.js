module.exports = async function handler(req, res) {
    if (req.method !== "GET") {
      return res.status(405).send("Method not allowed.");
    }
  
    const phone = process.env.WHATSAPP_PHONE;
  
    const defaultMessage =
      "Hello Marigold & Ember, I would like to book a call about an event.";
  
    const message = encodeURIComponent(req.query.message || defaultMessage);
  
    if (!phone) {
      return res.status(500).send("WhatsApp number is not configured.");
    }
  
    return res.redirect(302, `https://wa.me/${phone}?text=${message}`);
  };