
import React from 'react';

// Helper components for blog content rendering
const H2 = ({ children }) => (
  <h2 className="text-base md:text-lg font-bold mt-8 mb-3 uppercase tracking-wider" style={{ color: 'hsl(var(--accent-cyan))' }}>
    <span style={{ color: 'hsl(var(--accent-orange))' }}>## </span>{children}
  </h2>
);

const H3 = ({ children }) => (
  <h3 className="text-sm font-bold mt-6 mb-2" style={{ color: 'hsl(180, 80%, 65%)' }}>
    <span style={{ color: 'hsl(var(--accent-yellow))' }}>### </span>{children}
  </h3>
);

const H4 = ({ children }) => (
  <h4 className="text-[12px] font-bold mt-4 mb-1.5" style={{ color: 'hsl(180, 80%, 70%)' }}>
    {children}
  </h4>
);

const P = ({ children }) => (
  <p className="text-[11px] leading-[1.9] mb-3" style={{ color: 'hsl(120, 5%, 55%)' }}>{children}</p>
);

const Code = ({ children, title }) => (
  <div className="my-3 rounded-lg overflow-hidden" style={{ border: '1px solid hsl(var(--border-subtle))' }}>
    {title && (
      <div className="px-3 py-1.5 text-[9px] uppercase tracking-widest font-bold" style={{ background: 'hsl(var(--terminal-bg))', color: 'hsl(var(--muted))', borderBottom: '1px solid hsl(var(--border-subtle))' }}>
        {title}
      </div>
    )}
    <pre className="p-3 overflow-x-auto text-[10px] leading-[1.8]" style={{ background: 'hsl(220, 20%, 3%)', color: 'hsl(var(--accent-cyan))' }}>
      <code>{children}</code>
    </pre>
  </div>
);

const Blockquote = ({ children }) => (
  <blockquote className="my-4 pl-4 py-2 text-[11px] italic leading-relaxed" style={{ borderLeft: '2px solid hsl(var(--accent-cyan) / 0.4)', color: 'hsl(var(--accent-cyan))' }}>
    {children}
  </blockquote>
);

const Table = ({ headers, rows }) => (
  <div className="my-4 overflow-x-auto rounded-lg" style={{ border: '1px solid hsl(var(--border-subtle))' }}>
    <table className="w-full text-[10px]">
      <thead>
        <tr style={{ background: 'hsl(var(--terminal-bg))' }}>
          {headers.map((h, i) => (
            <th key={i} className="px-3 py-2 text-left font-bold uppercase tracking-wider" style={{ color: 'hsl(var(--accent-cyan))', borderBottom: '1px solid hsl(var(--border-subtle))' }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} style={{ borderBottom: '1px solid hsl(var(--border-subtle))' }}>
            {row.map((cell, j) => (
              <td key={j} className="px-3 py-2" style={{ color: 'hsl(120, 5%, 55%)' }}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Li = ({ children, icon = "✅" }) => (
  <li className="text-[11px] leading-[1.8] mb-1 flex items-start gap-2" style={{ color: 'hsl(120, 5%, 55%)' }}>
    <span className="flex-shrink-0">{icon}</span>
    <span>{children}</span>
  </li>
);

const BlogImage = ({ src, alt, caption }) => (
  <figure className="my-5">
    <div className="rounded-lg overflow-hidden" style={{ border: '1px solid hsl(var(--border-subtle))' }}>
      <img src={src} alt={alt} className="w-full object-cover" style={{ filter: 'saturate(0.85) brightness(0.9)' }} />
    </div>
    {caption && <figcaption className="text-[9px] mt-1.5 text-center uppercase tracking-widest" style={{ color: 'hsl(var(--muted))' }}>{caption}</figcaption>}
  </figure>
);

const Divider = () => (
  <hr className="my-6" style={{ borderColor: 'hsl(var(--border-subtle))' }} />
);

// ====== BLOG 1: Self-Hosting Guide ======
export const selfHostingBlog = (
  <div>
    <Blockquote>
      For developers who want to understand infrastructure, not just use it. This isn't a tutorial on clicking deploy buttons. This is about understanding how the internet actually works.
    </Blockquote>

    <H2>Why This Guide Exists</H2>
    <H3>The Problem with "Just Deploy to Vercel"</H3>
    <P>When someone tells you to "just deploy to Vercel," they're skipping over fundamental concepts: What is a public IP and why do you need one? What happens when someone visits your URL? How does traffic reach your application? Why can't people access localhost?</P>
    <P>These platforms abstract away the infrastructure, which is great for shipping products, but terrible for learning.</P>

    <H3>Who This Is For</H3>
    <ul className="mb-3 pl-2 space-y-0.5">
      <Li>You're a student behind college/hostel Wi-Fi</Li>
      <Li>You don't have router access</Li>
      <Li>You're on CGNAT (mobile hotspot, shared networks)</Li>
      <Li>You want to understand deployment, not just do it</Li>
      <Li>You're tired of free tier limitations</Li>
    </ul>

    <ul className="mb-3 pl-2 space-y-0.5">
      <Li icon="❌">Production applications with real users</Li>
      <Li icon="❌">Apps requiring 99.9% uptime</Li>
      <Li icon="❌">High-traffic scenarios (&gt;1000 concurrent users)</Li>
      <Li icon="❌">Anything involving sensitive user data</Li>
    </ul>

    <Divider />

    <H2>Network Fundamentals You Must Understand</H2>
    <H3>How the Internet REALLY Works</H3>
    <H4>The Ideal World</H4>
    <Code>{`User's Browser → Your Public IP → Your Router → Your Server`}</Code>
    <P>In this ideal scenario, a user types your URL, DNS resolves it to your public IP, the request hits your router, the router forwards to your server, and the server responds. This requires a public IP address, port forwarding on your router, and firewall rules allowing incoming traffic.</P>

    <H4>The Real World (Your Actual Situation)</H4>
    <Code>{`User's Browser → ??? → CGNAT → Your ISP → Your Device
                  ↑
              BLOCKED`}</Code>
    <P>You're behind CGNAT (Carrier-Grade Network Address Translation). Your device has a private IP (192.168.x.x, 10.x.x.x). Incoming connections are blocked by the ISP. You cannot configure port forwarding.</P>

    <H3>Understanding CGNAT</H3>
    <Code>{`┌─────────────────────────────────────────┐
│         Multiple Users (100-1000)       │
├─────────────────────────────────────────┤
│  User 1: 192.168.1.5                   │
│  User 2: 192.168.1.8                   │
│  User 3: 192.168.1.12 (YOU)            │
│  User 4: 192.168.1.19                  │
├─────────────────────────────────────────┤
│         ISP's CGNAT Gateway             │
│         (One Public IP)                 │
│         203.0.113.42                    │
└─────────────────────────────────────────┘`}</Code>
    <P>All users share ONE public IP. The ISP decides which user gets which incoming request. You have ZERO control.</P>

    <H3>The Solution: Reverse Tunneling</H3>
    <P>Since the internet can't reach you, you must reach the internet first.</P>
    <Code>{`Your Laptop → Establishes Tunnel → Public Relay Server
                                          ↑
                           User connects here`}</Code>
    <P>Your laptop creates an outgoing connection that stays permanently open. A public server acts as a relay. User requests come to the relay, which forwards through the tunnel to you.</P>

    <Divider />

    <H2>Environment Setup</H2>
    <H3>System Requirements</H3>
    <P>Operating System: Linux (Ubuntu 22.04+, Arch, Debian), macOS (with Homebrew), or Windows WSL2. Minimum 2GB RAM, 2 CPU cores, 10GB free space. Any internet connection — no public IP or router access required.</P>

    <H3>Prerequisites Installation</H3>
    <Code title="Ubuntu/Debian">{`# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js (v18 LTS)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install build tools
sudo apt install -y build-essential git curl

# Verify installations
node --version  # Should show v18.x.x
npm --version   # Should show 9.x.x`}</Code>

    <Code title="Arch Linux">{`sudo pacman -Syu
sudo pacman -S nodejs npm base-devel git curl`}</Code>

    <Code title="macOS">{`brew install node`}</Code>

    <Divider />

    <H2>The Reverse Tunnel Solution</H2>
    <H3>Why Tailscale Funnel?</H3>

    <Table
      headers={["Feature", "Tailscale Funnel", "ngrok", "Cloudflare Tunnel"]}
      rows={[
        ["Free tier", "✅ Generous", "⚠️ Limited", "✅ Good"],
        ["HTTPS", "✅ Automatic", "✅ Yes", "✅ Yes"],
        ["Custom domains", "✅ Subdomain", "💰 Paid", "✅ Yes"],
        ["Connection stability", "✅ Excellent", "✅ Good", "✅ Good"],
        ["Works behind CGNAT", "✅ Yes", "✅ Yes", "✅ Yes"],
        ["Base technology", "WireGuard", "Proprietary", "Cloudflare"],
      ]}
    />

    <Divider />

    <H2>Tailscale Deep Dive</H2>
    <H3>Installation</H3>
    <Code title="Ubuntu/Debian">{`# Add Tailscale repository
curl -fsSL https://pkgs.tailscale.com/stable/ubuntu/jammy.noarmor.gpg | \\
  sudo tee /usr/share/keyrings/tailscale-archive-keyring.gpg >/dev/null
curl -fsSL https://pkgs.tailscale.com/stable/ubuntu/jammy.tailscale-keyring.list | \\
  sudo tee /etc/apt/sources.list.d/tailscale.list

# Install
sudo apt update && sudo apt install tailscale

# Start service
sudo systemctl enable --now tailscaled

# Start Tailscale
sudo tailscale up`}</Code>

    <H3>Understanding Your Tailnet</H3>
    <P>A tailnet is your private VPN network. Every device you add gets a 100.x.x.x IP address, a hostname, and encrypted connections to other devices.</P>

    <H3>Tailscale vs Tailscale Funnel</H3>
    <Table
      headers={["Tailscale (VPN)", "Tailscale Funnel (Public)"]}
      rows={[
        ["Only devices in your tailnet can access", "Anyone on the internet can access"],
        ["Requires Tailscale installed", "No Tailscale required"],
        ["Private network", "Public URL"],
        ["Default behavior", "Must explicitly enable"],
      ]}
    />

    <Divider />

    <H2>Backend Setup with PM2</H2>
    <H3>Why You Need a Process Manager</H3>
    <P>Running `node server.js` is fine for development. But for anything resembling production, it stops when you close the terminal, doesn't restart on crash, doesn't start after reboot, has no logging or monitoring.</P>
    <P>PM2 solves all of this with background daemon, auto-restarts, built-in logging, process monitoring, and zero-downtime reloads.</P>

    <Code title="Install & Start">{`# Install globally
npm install -g pm2

# Start your backend
cd ~/projects/my-app/backend
pm2 start server.js --name api

# View all processes
pm2 list

# View logs
pm2 logs api --lines 100

# Monitor in real-time
pm2 monit`}</Code>

    <BlogImage
      src="/images/terminal_pic.png"
      alt="Terminal showing PM2 processes running"
      caption="PM2 managing backend and frontend processes with Tailscale Funnel active"
    />

    <H3>The Critical `pm2 save` Command</H3>
    <Code>{`# Save current processes
pm2 save

# Setup auto-start on reboot
pm2 startup
# Run the command it outputs

# After reboot, PM2 will auto-resurrect all saved processes`}</Code>

    <Divider />

    <H2>Frontend Configuration</H2>
    <H3>The Vite Security Error</H3>
    <P>When you expose Vite through Tailscale Funnel, you'll see "Invalid Host header." Vite checks the Host header for security. When accessed via your-device.ts.net, the host doesn't match localhost, so Vite blocks it.</P>

    <Code title="vite.config.ts">{`export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: ['your-device-name.tail-scale.ts.net'],
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false
      }
    }
  }
});`}</Code>

    <P>The proxy configuration forwards /api requests to your backend, avoids CORS issues, and keeps your backend URL hidden from the client.</P>

    <Divider />

    <H2>Going Public</H2>
    <H3>The Architecture</H3>
    <Code>{`┌──────────────────────────────────────────┐
│              Internet User               │
└────────────────┬─────────────────────────┘
                 │ HTTPS
                 ↓
┌──────────────────────────────────────────┐
│     Tailscale Funnel (Public Relay)      │
│  https://your-device.tail-scale.ts.net   │
└────────────────┬─────────────────────────┘
                 │ Encrypted Tunnel (WireGuard)
                 ↓
┌──────────────────────────────────────────┐
│       Your Laptop (Behind CGNAT)         │
│                                          │
│   Frontend (Port 3000) ←→ Backend (3001) │
│              via Vite Proxy              │
└──────────────────────────────────────────┘`}</Code>

    <Code title="Enable Funnel">{`# Enable funnel for port 3000
sudo tailscale funnel --bg 3000

# Verify it's working
tailscale funnel status

# Test
curl https://your-device.tail-scale.ts.net/api/health`}</Code>

    <BlogImage
      src="/images/tty_fm_ss.png"
      alt="TTY.FM - Self-hosted application running via Tailscale"
      caption="TTY.FM — a self-hosted music player running from a laptop, accessible worldwide"
    />

    <Divider />

    <H2>System Management</H2>
    <H3>Automated Startup Script</H3>
    <Code title="start-my-app.sh">{`#!/bin/bash
echo "Starting application stack..."

# 1. Start Tailscale
sudo systemctl start tailscaled
sleep 2

# 2. Resurrect PM2 processes
pm2 resurrect

# 3. Enable public access
sudo tailscale funnel --bg 3000

echo "✅ SERVER IS LIVE"
pm2 status`}</Code>

    <Divider />

    <H2>Troubleshooting</H2>
    <H3>Common Issues</H3>
    <P><strong style={{ color: 'hsl(var(--accent-yellow))' }}>Issue 1: "Invalid Host header"</strong> — Add your Tailscale domain to vite.config.ts allowedHosts array.</P>
    <P><strong style={{ color: 'hsl(var(--accent-yellow))' }}>Issue 2: "EADDRINUSE"</strong> — Another process is using the port. Use `lsof -i :3000` to find it, then `kill -9 PID`.</P>
    <P><strong style={{ color: 'hsl(var(--accent-yellow))' }}>Issue 3: API Requests Failing</strong> — Check if backend is running with `pm2 status`, test directly with `curl http://localhost:3001/api/health`.</P>
    <P><strong style={{ color: 'hsl(var(--accent-yellow))' }}>Issue 4: PM2 Resurrect Not Working</strong> — Always run `pm2 save` after starting your apps, and configure startup with `pm2 startup`.</P>

    <Divider />

    <H2>When to Graduate to Real Infrastructure</H2>
    <ul className="mb-3 pl-2 space-y-0.5">
      <Li>Traffic exceeds 1000 concurrent users</Li>
      <Li>You need 99%+ uptime</Li>
      <Li>Team collaboration required</Li>
      <Li>Handling sensitive data (GDPR/HIPAA)</Li>
    </ul>

    <H3>Recommended Learning Path</H3>
    <Code>{`You are here → Laptop Hosting (This Guide)
     ↓
VPS Hosting (DigitalOcean, $5/mo)
     ↓
Docker & Containers
     ↓
Cloud Platform Basics (AWS/GCP/Azure)
     ↓
Production Infrastructure (K8s, CI/CD, Monitoring)`}</Code>

    <Divider />

    <H2>Final Thoughts</H2>
    <P>This guide isn't about hosting from your laptop forever. It's about understanding how things work. When you eventually use Vercel, you'll know it's handling the reverse proxy/CDN. When you use Docker, you'll know it's process isolation. When you use Kubernetes, you'll know it's automated PM2 at scale.</P>
    <Blockquote>The magical becomes obvious. Now go build something amazing.</Blockquote>
  </div>
);

// Export blog data with content
// To add a new blog: 
// 1. Create the JSX content above (like selfHostingBlog)
// 2. Add a new entry to this array with fullContent pointing to it
export const blogPostsData = [
  {
    id: 1,
    title: "The Complete Guide to Self-Hosting from Your Laptop",
    date: { day: 15, month: "Dec" },
    summary: "From zero to production without cloud providers. CGNAT, reverse tunnels, PM2, Tailscale Funnel — everything explained.",
    image: "/images/Self_hosting.png",
    readTime: "20 min read",
    likes: 128,
    dislikes: 4,
    fullContent: selfHostingBlog,
  },
  // Add more blogs here following the same structure:
  // {
  //   id: 2,
  //   title: "Your Blog Title",
  //   date: { day: 10, month: "Nov" },
  //   summary: "Short description for the card.",
  //   image: "/placeholder.svg",
  //   readTime: "8 min read",
  //   likes: 0,
  //   dislikes: 0,
  //   fullContent: yourBlogContentJSX,
  // },
];
