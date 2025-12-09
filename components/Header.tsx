import React from 'react';
import { Icon } from './Icon';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-emerald-900/90 text-white shadow-lg border-b border-emerald-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-emerald-100 rounded-lg">
             <Icon name="Tree" className="text-emerald-800" size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-wide">林途导航</h1>
            <p className="text-xs text-emerald-200 font-medium tracking-widest uppercase">Senlv Nav</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-sm font-medium hover:text-emerald-300 transition-colors">关于平台</a>
          <a href="#submit" className="text-sm font-medium hover:text-emerald-300 transition-colors">站点收录</a>
          <div className="px-3 py-1 text-xs font-semibold bg-emerald-800 rounded-full border border-emerald-700">
            Professional Edition
          </div>
        </nav>
      </div>
    </header>
  );
};
