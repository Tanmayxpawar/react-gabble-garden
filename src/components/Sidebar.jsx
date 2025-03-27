
import React from "react";
import { MessageSquare, Plus, Settings, User } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 border-r bg-secondary/30 backdrop-blur-sm p-4 flex flex-col">
      <button className="glass-panel w-full mb-4 flex items-center justify-between p-3 hover:shadow-elevated transition-all duration-300">
        <span className="font-medium">New Chat</span>
        <Plus size={18} />
      </button>
      
      <div className="flex-1 overflow-y-auto scrollbar-thin space-y-1 py-2">
        <h2 className="text-xs font-semibold text-muted-foreground mb-2 px-4">TODAY</h2>
        
        <div className="side-panel-item active">
          <MessageSquare size={16} />
          <span className="text-sm truncate">Ways to use ChatGPT effectively</span>
        </div>
        
        <div className="side-panel-item">
          <MessageSquare size={16} />
          <span className="text-sm truncate">Project ideas for a portfolio</span>
        </div>
        
        <div className="side-panel-item">
          <MessageSquare size={16} />
          <span className="text-sm truncate">React performance optimization</span>
        </div>
        
        <h2 className="text-xs font-semibold text-muted-foreground mt-4 mb-2 px-4">YESTERDAY</h2>
        
        <div className="side-panel-item">
          <MessageSquare size={16} />
          <span className="text-sm truncate">Design system research</span>
        </div>
        
        <div className="side-panel-item">
          <MessageSquare size={16} />
          <span className="text-sm truncate">TypeScript best practices</span>
        </div>
      </div>
      
      <div className="border-t pt-4 space-y-2">
        <div className="side-panel-item">
          <User size={16} />
          <span className="text-sm">My Account</span>
        </div>
        
        <div className="side-panel-item">
          <Settings size={16} />
          <span className="text-sm">Settings</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
