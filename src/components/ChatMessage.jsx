
import React from "react";
import { useEffect, useState } from "react";

const ChatMessage = ({ message, isUser }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(!isUser);
  
  useEffect(() => {
    if (isUser) {
      setDisplayedText(message);
      return;
    }
    
    let i = 0;
    const typingSpeed = 12; // milliseconds per character
    
    if (message) {
      const typingInterval = setInterval(() => {
        if (i < message.length) {
          setDisplayedText(message.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, typingSpeed);
      
      return () => clearInterval(typingInterval);
    }
  }, [message, isUser]);
  
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`message-bubble max-w-3xl ${
          isUser ? "message-user" : "message-assistant"
        }`}
      >
        <div className="whitespace-pre-wrap text-balance">
          {displayedText}
          {isTyping && <span className="inline-block w-2 h-4 bg-foreground/50 ml-1 animate-pulse-light"></span>}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
