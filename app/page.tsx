"use client";

import { useEffect, useState } from "react";

// 1. REUSABLE LINK TILE COMPONENT
interface ProjectTileProps {
  title: string;
  description: string;
  linkUrl: string;
  status: "live" | "development" | "coming-soon";
  accentColor: string;
  icon: string;
}

function ProjectTile({
  title,
  description,
  linkUrl,
  status,
  accentColor,
  icon,
}: ProjectTileProps) {
  return (
    <a
      href={linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative p-6 border rounded-xl bg-stone-900/40 transition-all duration-500 flex flex-col justify-between group h-56 select-none ${
        status === "live" || status === "development"
          ? "border-stone-800 hover:bg-stone-950/20 cursor-pointer shadow-md"
          : "border-stone-900/60 opacity-60 cursor-not-allowed pointer-events-none"
      }`}
    >
      {/* Dynamic Hover Border Glow Accent */}
      <div
        className="absolute inset-0 border border-transparent rounded-xl transition-all duration-500 group-hover:opacity-100 opacity-0 pointer-events-none"
        style={{
          boxShadow: `0 0 20px ${accentColor}15`,
          borderColor: `${accentColor}40`,
        }}
      />

      <div>
        <div className="flex justify-between items-start mb-4">
          <span className="text-2xl filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300 inline-block">
            {icon}
          </span>
          <span
            className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded border"
            style={{
              borderColor: `${accentColor}40`,
              color: accentColor,
            }}
          >
            System Live
          </span>
        </div>
        <h2 className="text-lg font-bold font-serif tracking-wide text-stone-200 group-hover:text-stone-100 transition-colors">
          {title}
        </h2>
        <p className="text-xs text-stone-500 leading-relaxed font-sans mt-1.5 group-hover:text-stone-400 transition-colors">
          {description}
        </p>
      </div>

      <div className="text-xs font-mono tracking-wider text-right transition-colors duration-300 text-stone-500">
        <span className="group-hover:text-amber-500 transition-colors duration-300">
          Launch Reality →
        </span>
      </div>
    </a>
  );
}

// 2. MAIN HUB PORTAL
export default function BurniesWorldHub() {
  const [joke, setJoke] = useState("Scanning joke parameters...");
  const [loading, setLoading] = useState(true);

  const fallbackJokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "A skeleton walks into a bar... and asks for a mop.",
    "What do you call a fake noodle? An impasta.",
    "Why did the computer go to the doctor? It had a virus!",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
    "What goes up and down but doesn't move? Stairs.",
  ];

  const fetchDailyJoke = async () => {
    setLoading(true);

    try {
      const res = await fetch("https://icanhazdadjoke.com/slack");

      console.log("Response received:", res);

      if (!res.ok) {
        throw new Error("Network response error");
      }

      const data = await res.json();

      console.log("DATA:", data);

      if (data && data.attachments) {
        const firstAttachment = data.attachments[0];

        if (firstAttachment && firstAttachment.text) {
          setJoke(firstAttachment.text);
          return;
        }
      }

      throw new Error("Invalid structure");
    } catch (error) {
      console.error("Joke fetch failed:", error);

      const randomIdx = Math.floor(Math.random() * fallbackJokes.length);

      setJoke(fallbackJokes[randomIdx]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDailyJoke();
  }, []);

  return (
    <main className="min-h-screen w-screen bg-[#020203] text-stone-300 font-sans flex flex-col justify-between items-center p-6 sm:p-12 relative overflow-x-hidden selection:bg-amber-950/40 selection:text-amber-400">
      {/* AMBIENT ATMOSPHERIC BACKGROUND RADIAL SHIELD */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.02)_0%,rgba(0,0,0,0)_70%)] pointer-events-none z-0" />

      {/* CORE WRAPPER CONTROLLER */}
      <div className="w-full max-w-5xl z-10 flex flex-col items-center mt-4 sm:mt-8">
        {/* HEADER BRAND BLOCK */}
        <header className="text-center mb-12 sm:mb-16 select-none">
          <p className="text-[10px] font-mono tracking-[0.5em] text-stone-600 uppercase mb-2">
            Central Terminal // Matrix Portal
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-widest font-serif text-stone-200 uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Burnie&apos;s World
          </h1>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-stone-700 to-transparent mx-auto mt-4" />
        </header>

        {/* REUSEABLE PORTAL LINK TILES DECK */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 sm:mb-16">
          <ProjectTile
            title="The Abandoned Mine"
            description="A high-tension psychological survival text horror game loop. Monitor your sanity metrics, guard your lantern oil reserves, and survive the dark depths."
            linkUrl="https://abandonedmine.burniesworld.com"
            status="live"
            accentColor="#d97706"
            icon="🪓"
          />
          <ProjectTile
            title="AnythingToPDF Easy"
            description="A clean, secure, 100% client-side conversion engine framework. Transform textual blocks, and custom documents into production PDFs safely inside your browser."
            linkUrl="https://anythingtopdfeasy.com"
            status="live"
            accentColor="#3b82f6"
            icon="📄"
          />
        </div>

        {/* CLIENT-SIDE JOKE MODULE BLOCK CONTAINER */}
        <section className="w-full max-w-xl border border-stone-900 bg-stone-950/60 rounded-xl p-6 text-center shadow-lg backdrop-blur-sm select-none">
          <h3 className="text-[10px] font-mono tracking-[0.3em] text-amber-600/80 uppercase mb-4">
            🤖 Transmission Node // System Humour
          </h3>
          <div className="min-h-[60px] flex items-center justify-center px-4">
            <p
              className={`text-sm font-serif italic text-stone-400 transition-opacity duration-300 leading-relaxed ${loading ? "opacity-40 animate-pulse" : "opacity-100"}`}
            >
              &quot;{joke}&quot;
            </p>
          </div>
          <button
            onClick={fetchDailyJoke}
            disabled={loading}
            className="mt-6 px-4 py-1.5 border border-stone-800 rounded bg-[#070709] text-stone-500 hover:text-amber-500 hover:border-amber-900/60 font-mono text-xs tracking-wider transition-all duration-300 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed select-none"
          >
            {loading ? "Re-linking Grid..." : "Request Alternative Sync"}
          </button>
        </section>
      </div>

      {/* PORTAL COMPLIANCE ROOT FOOTER FOOTPRINT */}
      <footer className="w-full text-center mt-12 sm:mt-16 z-10 select-none pointer-events-none">
        <p className="text-[9px] font-mono tracking-widest text-stone-700 uppercase">
          © {new Date().getFullYear()} BurniesWorld • All matrix nodes operate
          completely serverless.
        </p>
      </footer>
    </main>
  );
}
