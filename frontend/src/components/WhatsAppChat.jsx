import React from "react";
import "./WhatsAppChat.css";
import whatsappIcon from "../assets/others_image/whatsapp.png";

const WhatsAppChat = () => {
  const phoneNumber = "+8801775215693"; 
  const message = "Hello! I want to know more about your service.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={whatsappIcon} alt="WhatsApp Chat" />
    </a>
  );
};

export default WhatsAppChat;
