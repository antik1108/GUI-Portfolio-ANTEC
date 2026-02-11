
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Background effects */}
      <div className="geometric-bg">
        <div className="geo-triangle-1"></div>
        <div className="geo-triangle-2"></div>
        <div className="geo-triangle-3"></div>
      </div>
      <div className="geometric-bg-right">
        <div className="geo-right-1"></div>
        <div className="geo-right-2"></div>
        <div className="geo-right-3"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 py-5 md:py-8">
        {/* Mobile: nav bar first, then header */}
        <div className="md:hidden">
          <Sidebar />
        </div>

        <Header />

        <div className="flex flex-col md:flex-row gap-4 mt-4">
          {/* Desktop: sidebar in flex layout */}
          <div className="hidden md:block">
            <Sidebar />
          </div>
          <main className="flex-1 min-w-0">
            <Outlet />
          </main>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center mt-8 mb-3 text-[11px] tracking-wider" style={{ color: 'hsl(120, 5%, 35%)' }}>
          <span className="inline-block w-1.5 h-1.5 rounded-full mr-2 animate-pulse" style={{ background: 'hsl(180, 100%, 45%)', boxShadow: '0 0 6px hsl(180, 100%, 45%, 0.5)' }}></span>
          ALL SYSTEMS OPERATIONAL · 
          <a href="#" className="ml-1" style={{ color: 'hsl(180, 100%, 45%)' }}>STATUS</a>
          {' '}· 
          <a href="#" className="ml-1" style={{ color: 'hsl(180, 100%, 45%)' }}>UPTIME</a>
        </div>
      </div>
    </div>
  );
};

export default Layout;
