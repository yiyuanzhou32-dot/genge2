import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">林途导航 Senlv Nav</h3>
            <p className="text-sm leading-relaxed">
              服务专业学生的学习科研，从业者的职业进阶。
              <br />
              一站式林业、文旅、国家公园学术与实践导航平台。
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400">关于我们</a></li>
              <li><a href="#" className="hover:text-emerald-400">使用指南</a></li>
              <li><a href="#" className="hover:text-emerald-400">隐私政策</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">联系与反馈</h4>
            <p className="text-sm mb-2">提交新站点或反馈问题：</p>
            <a href="mailto:support@senlvnav.com" className="text-emerald-400 hover:underline text-sm">support@senlvnav.com</a>
          </div>
        </div>
        <div className="border-t border-stone-800 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Senlv Nav. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
