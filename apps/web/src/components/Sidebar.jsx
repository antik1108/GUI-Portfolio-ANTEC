
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "ABOUT", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  )},
  { to: "/resume", label: "RESUME", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
    </svg>
  )},
  { to: "/portfolio", label: "PORTFOLIO", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    </svg>
  )},
  { to: "/blog", label: "BLOG", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
  )},
  { to: "/contact", label: "CONTACT", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
  )},
];

const Sidebar = () => {
  return (
    <>
      {/* Mobile: horizontal nav bar - sticky at top */}
      <nav
        className="flex md:hidden items-center justify-around rounded-lg p-1.5 overflow-x-auto sticky top-0 z-40"
        style={{ background: 'hsl(220, 15%, 7%)', border: '1px solid hsl(220, 10%, 12%)' }}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              `sidebar-nav-item flex-1 min-w-0 ${isActive ? 'active' : ''}`
            }
          >
            <div className="sidebar-nav-icon">{item.icon}</div>
            <span className="text-[7px] font-bold tracking-[0.1em]">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Desktop: vertical sidebar */}
      <aside className="hidden md:block sticky top-8">
        <nav
          className="flex flex-col items-center gap-1 p-1.5 rounded-lg"
          style={{ background: 'hsl(220, 15%, 7%)', border: '1px solid hsl(220, 10%, 12%)' }}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `sidebar-nav-item ${isActive ? 'active' : ''}`
              }
            >
              <div className="sidebar-nav-icon">{item.icon}</div>
              <span className="text-[8px] font-bold tracking-[0.15em]">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
