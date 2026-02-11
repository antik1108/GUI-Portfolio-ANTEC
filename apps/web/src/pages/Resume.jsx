
import React from 'react';

const Resume = () => {
  return (
    <div className="profile-card">
      <h2 className="section-title">resume</h2>
      
      {/* Experience */}
      <div className="mt-6">
        <div className="flex items-center gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(180, 100%, 45%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
          <h3 className="text-xs font-bold" style={{ color: 'hsl(180, 100%, 45%)' }}>experience</h3>
        </div>
        
        <div className="space-y-5 ml-1">
          <div className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: 'hsl(180, 100%, 45%)', boxShadow: '0 0 6px hsl(180, 100%, 45%, 0.4)' }}></div>
            <div className="flex-1">
              <h4 className="text-[11px] font-semibold" style={{ color: 'hsl(180, 100%, 50%)' }}>
                Ayu Sangrah Bharat <span style={{ color: 'hsl(120, 5%, 45%)' }} className="font-normal">as Co-Founder</span>
              </h4>
              <p className="text-[10px]" style={{ color: 'hsl(120, 5%, 40%)' }}>Kolkata · Aug 2025 - Present</p>
              <div className="mt-1.5 space-y-0.5 text-[10px]" style={{ color: 'hsl(120, 5%, 50%)' }}>
                <p>→ Strategic planning for health record platform</p>
                <p>→ Fundraising and investor relations</p>
                <p>→ Product development and team leadership</p>
                <p>→ Operations management and scaling</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: 'hsl(180, 100%, 45%)', boxShadow: '0 0 6px hsl(180, 100%, 45%, 0.4)' }}></div>
            <div className="flex-1">
              <h4 className="text-[11px] font-semibold" style={{ color: 'hsl(180, 100%, 50%)' }}>
                Society of Cyber Security <span style={{ color: 'hsl(120, 5%, 45%)' }} className="font-normal">as OS Head</span>
              </h4>
              <p className="text-[10px]" style={{ color: 'hsl(120, 5%, 40%)' }}>Sonipat · Jan 2025 - Present</p>
              <div className="mt-1.5 space-y-0.5 text-[10px]" style={{ color: 'hsl(120, 5%, 50%)' }}>
                <p>→ Workshops on Kali Linux, ethical hacking</p>
                <p>→ Cybersecurity awareness campaigns</p>
                <p>→ Mentoring in penetration testing</p>
                <p>→ Leading hands-on security challenges</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Education */}
      <div className="mt-10">
        <div className="flex items-center gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(180, 100%, 45%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
          </svg>
          <h3 className="text-xs font-bold" style={{ color: 'hsl(180, 100%, 45%)' }}>education</h3>
        </div>
        
        <div className="space-y-4 ml-1">
          {[
            { name: "Newton School of Technology", date: "2024 - 2028", detail: "B.Tech AI · Rishihood University" },
            { name: "Rishihood University", date: "2024 - 2028", detail: "Minor in Entrepreneurship" },
            { name: "Bankura Banga Vidyalaya", date: "2022 - 2024", detail: "Class XII — 75%" },
            { name: "Bankura Christian Collegiate School", date: "2019 - 2022", detail: "Class X — 75%" },
          ].map((edu, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: 'hsl(180, 100%, 45%)', boxShadow: '0 0 6px hsl(180, 100%, 45%, 0.4)' }}></div>
              <div>
                <h4 className="text-[11px] font-semibold" style={{ color: 'hsl(180, 100%, 50%)' }}>{edu.name}</h4>
                <p className="text-[10px]" style={{ color: 'hsl(120, 5%, 40%)' }}>{edu.date}</p>
                <p className="text-[10px]" style={{ color: 'hsl(120, 5%, 50%)' }}>{edu.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Skills */}
      <div className="mt-10">
        <h2 className="section-title">skills</h2>
        
        <div className="mt-4 rounded-lg p-4" style={{ border: '1px solid hsl(220, 10%, 12%)' }}>
          <div className="space-y-2">
            {[
              { name: "Python", level: "proficient" },
              { name: "TypeScript / JavaScript", level: "proficient" },
              { name: "React / Next.js", level: "intermediate" },
              { name: "Node.js / Express", level: "intermediate" },
              { name: "Linux & DevOps", level: "intermediate" },
              { name: "Docker & GitHub Actions", level: "intermediate" },
              { name: "PostgreSQL / MongoDB", level: "intermediate" },
              { name: "AWS / Firebase", level: "beginner" },
            ].map((skill, i) => (
              <div key={i} className="skill-bar">
                <span>{skill.name}</span>
                <span className="text-[9px] uppercase tracking-widest opacity-70">{skill.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Code Skills */}
      <div className="mt-8">
        <h2 className="section-title">tools</h2>
        
        <div className="mt-4 rounded-lg p-4" style={{ border: '1px solid hsl(220, 10%, 12%)' }}>
          <div className="space-y-2">
            {[
              { name: "Docker", level: "intermediate" },
              { name: "Git & GitHub", level: "proficient" },
              { name: "Prisma ORM", level: "intermediate" },
              { name: "Tailwind CSS", level: "proficient" },
              { name: "Pandas / NumPy", level: "intermediate" },
              { name: "Virtualization", level: "intermediate" },
            ].map((skill, i) => (
              <div key={i} className="skill-bar">
                <span>{skill.name}</span>
                <span className="text-[9px] uppercase tracking-widest opacity-70">{skill.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
