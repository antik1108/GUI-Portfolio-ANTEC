
import React, { useState } from 'react';
import BlogPost from '../components/BlogPost';
import { blogPostsData } from '../data/blogContent';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  if (selectedPost) {
    return (
      <BlogPost
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    );
  }

  return (
    <div className="profile-card">
      <h2 className="section-title">blog</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        {blogPostsData.map((post) => (
          <div
            key={post.id}
            className="blog-card group cursor-pointer"
            onClick={() => post.fullContent ? setSelectedPost(post) : null}
          >
            <div className="relative overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover object-top transition-all duration-500 group-hover:scale-105" style={{ filter: 'saturate(0.8) brightness(0.9)' }} />
              <div className="blog-date">
                <div className="text-sm leading-tight font-bold">{post.date.day}</div>
                <div className="text-[8px] uppercase tracking-[0.15em]">{post.date.month}</div>
              </div>
              {!post.fullContent && (
                <div className="absolute bottom-2 right-2 text-[8px] uppercase tracking-widest px-2 py-0.5 rounded" style={{ background: 'hsl(var(--terminal-bg) / 0.9)', color: 'hsl(var(--muted))', border: '1px solid hsl(var(--border-subtle))' }}>
                  coming soon
                </div>
              )}
            </div>
            <div className="p-3">
              <h3 className="text-[11px] font-bold leading-snug group-hover:underline decoration-1 underline-offset-2" style={{ color: 'hsl(180, 80%, 65%)' }}>{post.title}</h3>
              <p className="mt-1 text-[10px] leading-relaxed" style={{ color: 'hsl(120, 5%, 40%)' }}>{post.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
