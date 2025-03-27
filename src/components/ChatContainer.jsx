
import React, { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

// Sample AI responses
const aiResponses = [
  "I'm an AI assistant designed to help you with information, creative tasks, or just conversation. How can I assist you today?",
  "That's an interesting question. Let me think about it... From what I understand, the key factors to consider are context, relevance, and practical application.",
  "Here are some project ideas for your portfolio:\n\n1. **Personal Blog** - Showcase your writing and web development skills\n2. **E-commerce Site** - Demonstrate your ability to handle complex interactions\n3. **Data Visualization Dashboard** - Show your analytical and frontend skills\n4. **Mobile-First Web App** - Highlight your responsive design expertise\n5. **API Integration Project** - Showcase your backend knowledge",
  "When optimizing React performance, consider these techniques:\n\n- Use React.memo for component memoization\n- Implement useMemo and useCallback hooks\n- Virtualize long lists with react-window\n- Use proper key attributes in lists\n- Avoid inline function definitions\n- Consider code splitting with React.lazy\n\nWould you like me to elaborate on any of these approaches?",
];

const ChatContainer = () => {
  const [messages, setMessages] = useState([
    { text: aiResponses[0], isUser: false },
  ]);
  const messagesEndRef = useRef(null);
  
  const handleSendMessage = (text) => {
    setMessages((prev) => [...prev, { text, isUser: true }]);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      setMessages((prev) => [...prev, { text: randomResponse, isUser: false }]);
    }, 1000);
  };
  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  return (
    <div className="flex-1 flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto scrollbar-thin px-4 md:px-8 py-6">
        <div className="max-w-4xl mx-auto">
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message.text}
              isUser={message.isUser}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatContainer;
