
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <div className="profile-card">
      <h2 className="section-title">contact</h2>
      
      <p className="text-[11px] mt-3 mb-6" style={{ color: 'hsl(120, 5%, 45%)' }}>
        open_for_opportunities: <span style={{ color: 'hsl(180, 100%, 50%)' }} className="font-bold">true</span>
      </p>
      
      <h3 className="text-xs font-bold mb-4" style={{ color: 'hsl(180, 100%, 45%)' }}>$ send_message</h3>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="name" className="form-input" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email" className="form-input" required />
        </div>
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="message" className="form-textarea" required></textarea>
        <div className="flex justify-end">
          <button type="submit" className="button-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
