
import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { Maximize2, Minimize2 } from 'lucide-react';
import { AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike } from 'react-icons/ai';

const BlogPost = ({ post, onClose }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likes, setLikes] = useState(post.likes || 42);
  const [dislikes, setDislikes] = useState(post.dislikes || 3);
  const [fullscreen, setFullscreen] = useState(false);
  const [comments, setComments] = useState([
    { id: 1, author: "devuser_01", text: "This is exactly what I needed. The CGNAT section cleared up so much confusion!", time: "2 days ago" },
    { id: 2, author: "linux_hacker", text: "Great write-up. Would love a follow-up on Docker + Tailscale.", time: "1 day ago" },
  ]);
  const [newComment, setNewComment] = useState("");
  const [commentName, setCommentName] = useState("");

  const handleLike = () => {
    if (liked) { setLiked(false); setLikes(l => l - 1); }
    else { setLiked(true); setLikes(l => l + 1); if (disliked) { setDisliked(false); setDislikes(d => d - 1); } }
  };

  const handleDislike = () => {
    if (disliked) { setDisliked(false); setDislikes(d => d - 1); }
    else { setDisliked(true); setDislikes(d => d + 1); if (liked) { setLiked(false); setLikes(l => l - 1); } }
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setComments(prev => [...prev, {
      id: Date.now(), author: commentName.trim() || "anonymous", text: newComment.trim(), time: "Just now"
    }]);
    setNewComment("");
    setCommentName("");
  };

  const btnStyle = {
    background: 'hsl(var(--terminal-bg))',
    border: '1px solid hsl(var(--border-subtle))',
    color: 'hsl(var(--muted))',
  };

  const btnHover = (e) => { e.currentTarget.style.color = 'hsl(var(--accent-cyan))'; e.currentTarget.style.borderColor = 'hsl(180,100%,45%,0.3)'; };
  const btnLeave = (e) => { e.currentTarget.style.color = 'hsl(var(--muted))'; e.currentTarget.style.borderColor = 'hsl(var(--border-subtle))'; };

  if (fullscreen) {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto" style={{ background: 'hsl(var(--background))' }}>
        <div className="max-w-3xl mx-auto px-6 py-8">
          {/* Fullscreen toolbar */}
          <div className="flex items-center justify-end gap-2 mb-6 sticky top-0 z-10 py-3 -mx-6 px-6" style={{ background: 'hsl(var(--background) / 0.95)', backdropFilter: 'blur(8px)' }}>
            <button onClick={() => setFullscreen(false)} className="p-1.5 rounded-lg transition-all duration-200" style={btnStyle} onMouseEnter={btnHover} onMouseLeave={btnLeave} title="Exit fullscreen">
              <Minimize2 size={18} />
            </button>
            <button onClick={onClose} className="p-1.5 rounded-lg transition-all duration-200" style={btnStyle} onMouseEnter={btnHover} onMouseLeave={btnLeave} title="Close blog">
              <IoClose size={20} />
            </button>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: 'hsl(var(--accent-orange))' }}>
              {post.date.month} {post.date.day}, 2025 · {post.readTime || '15 min read'}
            </div>
            <h1 className="text-xl md:text-2xl font-bold leading-tight mb-2" style={{ color: 'hsl(var(--accent-cyan))' }}>
              {post.title}
            </h1>
            <div className="text-[10px]" style={{ color: 'hsl(var(--muted))' }}>
              by <span style={{ color: 'hsl(var(--accent-cyan))' }}>Antik Mondal</span>
            </div>
            <div className="mt-4 h-[1px]" style={{ background: 'hsl(var(--border-subtle))' }} />
          </div>

          <article className="blog-article-content">{post.fullContent}</article>

          {/* Like / Dislike */}
          <div className="mt-8 pt-6" style={{ borderTop: '1px solid hsl(var(--border-subtle))' }}>
            <div className="flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: 'hsl(var(--muted))' }}>Was this helpful?</span>
              <button onClick={handleLike} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200" style={{ background: liked ? 'hsl(var(--accent-cyan) / 0.15)' : 'hsl(var(--terminal-bg))', border: `1px solid ${liked ? 'hsl(var(--accent-cyan) / 0.3)' : 'hsl(var(--border-subtle))'}`, color: liked ? 'hsl(var(--accent-cyan))' : 'hsl(var(--muted))' }}>
                {liked ? <AiFillLike size={16} /> : <AiOutlineLike size={16} />}
                <span className="text-xs font-bold">{likes}</span>
              </button>
              <button onClick={handleDislike} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200" style={{ background: disliked ? 'hsl(var(--accent-red) / 0.15)' : 'hsl(var(--terminal-bg))', border: `1px solid ${disliked ? 'hsl(var(--accent-red) / 0.3)' : 'hsl(var(--border-subtle))'}`, color: disliked ? 'hsl(var(--accent-red))' : 'hsl(var(--muted))' }}>
                {disliked ? <AiFillDislike size={16} /> : <AiOutlineDislike size={16} />}
                <span className="text-xs font-bold">{dislikes}</span>
              </button>
            </div>
          </div>

          {/* Comments */}
          <div className="mt-6 pt-6 pb-12" style={{ borderTop: '1px solid hsl(var(--border-subtle))' }}>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: 'hsl(var(--accent-cyan))' }}>
              <span style={{ color: 'hsl(var(--accent-orange))' }}>$ </span>comments ({comments.length})
            </h3>
            <div className="space-y-3 mb-5">
              {comments.map(c => (
                <div key={c.id} className="p-3 rounded-lg" style={{ background: 'hsl(var(--terminal-bg))', border: '1px solid hsl(var(--border-subtle))' }}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold" style={{ color: 'hsl(var(--accent-cyan))' }}>@{c.author}</span>
                    <span className="text-[10px]" style={{ color: 'hsl(var(--muted))' }}>{c.time}</span>
                  </div>
                  <p className="text-[11px] leading-relaxed" style={{ color: 'hsl(var(--foreground))' }}>{c.text}</p>
                </div>
              ))}
            </div>
            <form onSubmit={handleAddComment} className="space-y-2">
              <input type="text" value={commentName} onChange={e => setCommentName(e.target.value)} placeholder="your_username (optional)" className="form-input w-full text-[11px]" />
              <textarea value={newComment} onChange={e => setNewComment(e.target.value)} placeholder="Write a comment..." className="form-textarea w-full text-[11px]" rows={3} />
              <button type="submit" className="button-primary text-[10px]">post comment</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-card" style={{ animation: 'fadeInUp 0.3s ease-out' }}>
      {/* Action buttons */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5">
        <button onClick={() => setFullscreen(true)} className="p-1.5 rounded-lg transition-all duration-200" style={btnStyle} onMouseEnter={btnHover} onMouseLeave={btnLeave} title="Fullscreen reading">
          <Maximize2 size={16} />
        </button>
        <button onClick={onClose} className="p-1.5 rounded-lg transition-all duration-200" style={btnStyle} onMouseEnter={btnHover} onMouseLeave={btnLeave} title="Close">
          <IoClose size={20} />
        </button>
      </div>

      {/* Blog header */}
      <div className="mb-6 pt-2">
        <div className="text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: 'hsl(var(--accent-orange))' }}>
          {post.date.month} {post.date.day}, 2025 · {post.readTime || '15 min read'}
        </div>
        <h1 className="text-lg md:text-xl font-bold leading-tight mb-2 pr-20" style={{ color: 'hsl(var(--accent-cyan))' }}>
          {post.title}
        </h1>
        <div className="text-[10px]" style={{ color: 'hsl(var(--muted))' }}>
          by <span style={{ color: 'hsl(var(--accent-cyan))' }}>Antik Mondal</span>
        </div>
        <div className="mt-3 h-[1px]" style={{ background: 'hsl(var(--border-subtle))' }} />
      </div>

      <article className="blog-article-content">{post.fullContent}</article>

      {/* Like / Dislike */}
      <div className="mt-8 pt-6" style={{ borderTop: '1px solid hsl(var(--border-subtle))' }}>
        <div className="flex items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: 'hsl(var(--muted))' }}>Was this helpful?</span>
          <button onClick={handleLike} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200" style={{ background: liked ? 'hsl(var(--accent-cyan) / 0.15)' : 'hsl(var(--terminal-bg))', border: `1px solid ${liked ? 'hsl(var(--accent-cyan) / 0.3)' : 'hsl(var(--border-subtle))'}`, color: liked ? 'hsl(var(--accent-cyan))' : 'hsl(var(--muted))' }}>
            {liked ? <AiFillLike size={16} /> : <AiOutlineLike size={16} />}
            <span className="text-xs font-bold">{likes}</span>
          </button>
          <button onClick={handleDislike} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200" style={{ background: disliked ? 'hsl(var(--accent-red) / 0.15)' : 'hsl(var(--terminal-bg))', border: `1px solid ${disliked ? 'hsl(var(--accent-red) / 0.3)' : 'hsl(var(--border-subtle))'}`, color: disliked ? 'hsl(var(--accent-red))' : 'hsl(var(--muted))' }}>
            {disliked ? <AiFillDislike size={16} /> : <AiOutlineDislike size={16} />}
            <span className="text-xs font-bold">{dislikes}</span>
          </button>
        </div>
      </div>

      {/* Comments */}
      <div className="mt-6 pt-6" style={{ borderTop: '1px solid hsl(var(--border-subtle))' }}>
        <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: 'hsl(var(--accent-cyan))' }}>
          <span style={{ color: 'hsl(var(--accent-orange))' }}>$ </span>comments ({comments.length})
        </h3>
        <div className="space-y-3 mb-5">
          {comments.map(c => (
            <div key={c.id} className="p-3 rounded-lg" style={{ background: 'hsl(var(--terminal-bg))', border: '1px solid hsl(var(--border-subtle))' }}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-bold" style={{ color: 'hsl(var(--accent-cyan))' }}>@{c.author}</span>
                <span className="text-[10px]" style={{ color: 'hsl(var(--muted))' }}>{c.time}</span>
              </div>
              <p className="text-[11px] leading-relaxed" style={{ color: 'hsl(var(--foreground))' }}>{c.text}</p>
            </div>
          ))}
        </div>
        <form onSubmit={handleAddComment} className="space-y-2">
          <input type="text" value={commentName} onChange={e => setCommentName(e.target.value)} placeholder="your_username (optional)" className="form-input w-full text-[11px]" />
          <textarea value={newComment} onChange={e => setNewComment(e.target.value)} placeholder="Write a comment..." className="form-textarea w-full text-[11px]" rows={3} />
          <button type="submit" className="button-primary text-[10px]">post comment</button>
        </form>
      </div>
    </div>
  );
};

export default BlogPost;
