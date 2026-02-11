
import React from 'react';

const About = () => {
  return (
    <div className="profile-card">
      <h2 className="section-title">about_me</h2>
      
      <div className="space-y-3 text-sm leading-relaxed" style={{ color: 'hsl(120, 5%, 50%)' }}>
        <p>
          Building the future of healthtech at the intersection of technology and business.
          I'm a B.Tech student at <span style={{ color: 'hsl(180, 100%, 50%)' }} className="font-medium">Newton School of Technology</span>, specializing in Computer Science & AI, 
          with a passion for problem-solving that drives me to build products that create meaningful impact.
        </p>
        
        <p>
          Currently, I'm channeling this drive into a healthtech startup — <span className="font-semibold" style={{ color: 'hsl(180, 100%, 45%)' }}>Ayu Sangrah Bharat</span> — aimed at 
          transforming healthcare in India. My toolkit blends the precision of DevOps, Linux, and automation 
          with the strategic insights from SQL, Excel, and Pandas.
        </p>
        
        <p>
          Full-stack engineer specializing in DevOps and infrastructure engineering. Built scalable systems 
          from concept to deployment. Known for strong problem-solving skills, taking ownership of challenging 
          projects, and collaborative approach in startup environments.
        </p>
      </div>
      
      <h2 className="section-title mt-10">what_im_doing</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        {[
          {
            icon: <><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></>,
            title: "full-stack-dev",
            desc: "Building scalable web apps with React, Node.js, Express, PostgreSQL, and modern tooling"
          },
          {
            icon: <><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line></>,
            title: "devops-linux",
            desc: "CI/CD pipelines, Docker, GitHub Actions, infrastructure automation, and system administration"
          },
          {
            icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>,
            title: "healthtech",
            desc: "Co-founding Ayu Sangrah Bharat — India's comprehensive health record platform"
          },
          {
            icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>,
            title: "cybersecurity",
            desc: "OS Head at Society of Cyber Security — workshops on ethical hacking and network security"
          }
        ].map((item, i) => (
          <div key={i} className="feature-card !text-left">
            <div className="flex items-start gap-3">
              <div 
                className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0"
                style={{ background: 'hsl(180, 100%, 45%, 0.08)', border: '1px solid hsl(180, 100%, 45%, 0.15)' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(180, 100%, 50%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {item.icon}
                </svg>
              </div>
              <div>
                <h3 className="text-xs font-bold mb-1" style={{ color: 'hsl(180, 100%, 50%)' }}>{item.title}</h3>
                <p className="text-[11px] leading-relaxed" style={{ color: 'hsl(120, 5%, 45%)' }}>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <h2 className="section-title mt-10">achievements</h2>
      
      <div className="feature-card mt-4 !text-left">
        <div className="flex items-center gap-3">
          <div 
            className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0"
            style={{ background: 'hsl(50, 100%, 55%, 0.08)', border: '1px solid hsl(50, 100%, 55%, 0.15)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(50, 100%, 55%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="7"></circle>
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
            </svg>
          </div>
          <div>
            <h3 className="text-xs font-bold" style={{ color: 'hsl(50, 100%, 55%)' }}>NIRMAAN 2025 – 2nd Place Winner</h3>
            <p className="text-[11px] mt-0.5" style={{ color: 'hsl(120, 5%, 45%)' }}>
              Startup Buildathon at Delhi University — 30-hour offline hackathon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
