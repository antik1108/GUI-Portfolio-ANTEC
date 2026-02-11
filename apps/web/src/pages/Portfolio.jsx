
import React, { useState } from 'react';

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  
  const portfolioItems = [
    {
      id: 1, title: "Terminal-Portfolio-ANTEC", category: "project",
      image: "/placeholder.svg",
      links: [{ title: "Article", url: "#" }]
    },
    {
      id: 2, title: "Authra", category: "project",
      image: "/placeholder.svg",
      links: [{ title: "Article", url: "#" }]
    },
    {
      id: 3, title: "Ayu Sangrah Bharat", category: "startup",
      image: "/placeholder.svg",
      links: []
    },
    {
      id: 4, title: "NIRMAAN 2025", category: "achievement",
      image: "/placeholder.svg",
      links: [{ title: "Verify", url: "#" }, { title: "Certificate", url: "#" }]
    }
  ];
  
  const filteredItems = filter === "all" ? portfolioItems : portfolioItems.filter(item => item.category === filter);
  const categories = [
    { key: "all", label: "all" }, { key: "project", label: "project" },
    { key: "startup", label: "startup" }, { key: "achievement", label: "achievement" },
  ];
  
  return (
    <div className="profile-card">
      <h2 className="section-title">portfolio</h2>
      
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        {categories.map((cat, i) => (
          <React.Fragment key={cat.key}>
            {i > 0 && <span style={{ color: 'hsl(120, 5%, 25%)' }}>·</span>}
            <button
              className={`text-[11px] font-medium transition-all duration-200 uppercase tracking-wider ${
                filter === cat.key ? '' : ''
              }`}
              style={filter === cat.key 
                ? { color: 'hsl(180, 100%, 50%)', textShadow: '0 0 8px hsl(180, 100%, 45%, 0.3)' } 
                : { color: 'hsl(120, 5%, 40%)' }
              }
              onClick={() => setFilter(cat.key)}
            >
              {cat.label}
            </button>
          </React.Fragment>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="portfolio-item group">
            <div className="relative overflow-hidden">
              <img src={item.image} alt={item.title} className="portfolio-item-image transition-all duration-500 group-hover:scale-105" />
              <span className="portfolio-item-tag">{item.category}</span>
            </div>
            <div className="p-3 pb-4">
              <h3 className="text-[11px] font-bold" style={{ color: 'hsl(180, 100%, 50%)' }}>{item.title}</h3>
              {item.links.length > 0 && (
                <div className="flex gap-2 mt-2">
                  {item.links.map((link, index) => (
                    <a key={index} href={link.url} className="portfolio-link">{link.title}</a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
