
import { useLocation } from "react-router-dom";

const Header = () => {
  const profileImage = "/images/profile_pic.png";

  return (
    <header className="header-card">
      <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:gap-6">
        {/* Profile image */}
        <div className="rounded-lg overflow-hidden w-20 h-20 md:w-24 md:h-24 flex-shrink-0 border-2 border-[hsl(180,100%,45%,0.3)] shadow-[0_0_15px_hsl(180,100%,45%,0.1)]">
          <img
            src={profileImage}
            alt="Antik Mondal"
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: "50% 30%" }}
          />
        </div>

        {/* Name + role + socials */}
        <div className="flex-1 min-w-0 text-center md:text-left">
          <h1 className="text-lg md:text-xl font-bold glow-text cursor-blink">
            antik@mondal
          </h1>
          <p className="mt-0.5 text-xs tracking-wider" style={{ color: 'hsl(120, 5%, 40%)' }}>
            ~ $ whoami → Full-Stack Engineer | DevOps | Startup Builder
          </p>

          <div className="flex justify-center md:justify-start gap-0.5 mt-2">
            <a href="https://www.linkedin.com/in/antik-t30a04m" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://github.com/antik1108" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="mailto:itsantikmondal143@gmail.com" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-2 w-full md:w-auto">
          <div className="info-pair">
            <span className="info-label">email</span>
            <a href="mailto:itsantikmondal143@gmail.com" className="info-value truncate">
              itsantikmondal143@gmail.com
            </a>
          </div>

          <div className="info-pair">
            <span className="info-label">cv</span>
            <a href="#" className="info-value">
              download ↓
            </a>
          </div>

          <div className="info-pair">
            <span className="info-label">location</span>
            <div className="info-value">Kolkata, IN</div>
          </div>

          <div className="info-pair">
            <span className="info-label">status</span>
            <div className="info-value">
              <span className="inline-block w-1.5 h-1.5 rounded-full mr-1.5 animate-pulse" style={{ background: 'hsl(180, 100%, 45%)', boxShadow: '0 0 6px hsl(180, 100%, 45%, 0.5)' }}></span>
              online
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
