
import React, { useState } from "react";
import { Send, Mic, Paperclip } from "lucide-react";

const ChatInput = ({ onSendMessage }) => {
  const [input, setInput] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput("");
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="pb-6 px-4 md:px-8">
      <div className="input-container max-w-4xl mx-auto">
        <button
          type="button"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Attach file"
        >
          <Paperclip size={18} />
        </button>
        
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Message ChatGPT..."
          className="flex-1 bg-transparent border-none outline-none text-foreground py-2 px-1"
        />
        
        <button
          type="button"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Voice input"
        >
          <Mic size={18} />
        </button>
        
        <button
          type="submit"
          disabled={!input.trim()}
          className={`rounded-full p-1.5 transition-colors ${
            input.trim()
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          }`}
          aria-label="Send message"
        >
          <Send size={16} />
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
