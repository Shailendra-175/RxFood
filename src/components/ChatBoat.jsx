// src/components/ChatBoat.jsx
import React, { useState } from "react";

function ChatBoat() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState("form"); // "form" | "chat"

  const toggleChat = () => setIsOpen(!isOpen);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStep("chat"); // 👉 move to chat after form
  };

  return (
    <div className="chatbot-container">
      {/* Floating button */}
      {!isOpen && (
        <div className="chatbot-toggle" onClick={toggleChat}>
          💬
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          {/* ❌ Close button */}
          <button className="chatbot-close" onClick={toggleChat}>
            ✖
          </button>

          {/* 👉 Step 1: Form */}
          {step === "form" && (
            <form onSubmit={handleFormSubmit} className="chatbot-form">
              <h3>Chat Live with our Health Expert Now!</h3>
              <p>Please share your details so we can assist you.</p>

              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />

              <div className="phone-input">
                <span>+91</span>
                <input type="tel" placeholder="Phone" required />
              </div>

              <input type="text" placeholder="Health Issue" required />
              <input type="number" placeholder="Age" required />
              <input type="number" placeholder="Current Weight" required />
              <input type="number" placeholder="Height (cm)" required />

              <button className="start-chat" type="submit">Start Chat</button>
            </form>
          )}

          {/* 👉 Step 2: Chat */}
          {step === "chat" && (
            <div className="chat-window">
              <h3>New Conversation</h3>
              <div className="chat-messages">
                <p>👩‍⚕️ Hello! How can I help you today?</p>
              </div>
              <input
                type="text"
                placeholder="Type your message..."
                className="chat-input"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ChatBoat;
