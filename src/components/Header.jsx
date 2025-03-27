
import React from "react";
import { Menu, BrainCircuit } from "lucide-react";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="h-14 border-b flex items-center justify-between px-4 md:px-8 bg-background/80 backdrop-blur-md sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <button 
          onClick={toggleSidebar}
          className="md:hidden p-2 rounded-md hover:bg-secondary transition-colors"
          aria-label="Toggle sidebar"
        >
          <Menu size={20} />
        </button>
        <div className="flex items-center gap-2">
          <BrainCircuit className="text-primary" size={22} />
          <h1 className="font-semibold text-lg">ChatGPT</h1>
        </div>
      </div>
      
      <div className="flex items-center">
        <span className="text-sm font-medium bg-secondary/70 px-3 py-1.5 rounded-full">
          GPT-4
        </span>
      </div>
    </header>
  );
};

export default Header;
