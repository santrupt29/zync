import React from "react";
const PageLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="relative">
        <div className="w-32 h-32 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full animate-spin"></div>
        
        <div className="absolute inset-4 w-24 h-24 border-4 border-transparent border-t-purple-500 border-l-blue-500 rounded-full animate-spin" style={{animationDirection: 'reverse'}}></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
        </div>
        
        <div className="absolute -top-2 -left-2 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
        <div className="absolute -top-2 -right-2 w-2 h-2 bg-purple-500 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-purple-500 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-blue-500 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
      </div>
    </div>
  );
};

export default PageLoader;
