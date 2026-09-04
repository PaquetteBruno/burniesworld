"use client";

import { useEffect, useState } from "react";

// 1. REUSABLE LINK TILE COMPONENT
interface ProjectTileProps {
  title: string;
  description: string;
  linkUrl: string;
  status: "live" | "development" | "coming-soon" | "in-progress";
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
  const isInteractive = status === "live" || status === "development";

  return (
    <a
      href={isInteractive ? linkUrl : undefined}
      target={isInteractive ? "_blank" : undefined}
      rel={isInteractive ? "noopener noreferrer" : undefined}
      className={`relative p-5 border rounded-xl bg-stone-900/40 transition-all duration-500 flex flex-col justify-between group select-none min-h-[11rem] ${
        isInteractive
          ? "border-stone-800 hover:bg-stone-950/20 cursor-pointer shadow-md"
          : "border-stone-900/40 opacity-70 cursor-not-allowed"
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

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <span className="text-xl filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300 inline-block">
            {icon}
          </span>
          <span
            className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded border"
            style={{
              borderColor: `${accentColor}40`,
              color: accentColor,
            }}
          >
            {status === "in-progress" ? "In Progress" : "System Live"}
          </span>
        </div>
        <div>
          <h2 className="text-base font-bold font-serif tracking-wide text-stone-200 group-hover:text-stone-100 transition-colors">
            {title}
          </h2>
          <p className="text-[11px] text-stone-500 leading-relaxed font-sans mt-1 group-hover:text-stone-400 transition-colors">
            {description}
          </p>
        </div>
      </div>

      <div className="text-[11px] font-mono tracking-wider text-right mt-3 transition-colors duration-300 text-stone-500">
        <span
          className={
            isInteractive
              ? "group-hover:text-amber-500 transition-colors duration-300"
              : ""
          }
          style={!isInteractive ? { color: `${accentColor}80` } : {}}
        >
          {status === "in-progress" ? "Exploring Soon..." : "Launch Reality →"}
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
    "How many programmers does it take to jokes change a light bulb? None, that's a hardware problem.",
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
    <main className="min-h-screen w-full bg-[#020203] text-stone-300 font-sans flex flex-col justify-between items-center p-4 md:p-6 lg:px-12 relative overflow-x-hidden selection:bg-amber-950/40 selection:text-amber-400">
      {/* AMBIENT ATMOSPHERIC BACKGROUND RADIAL SHIELD */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.02)_0%,rgba(0,0,0,0)_70%)] pointer-events-none z-0" />

      {/* MAIN CONTENT WRAPPER */}
      <div className="w-full max-w-5xl z-10 flex flex-col items-center pt-12 md:pt-20 pb-8 flex-grow">
        {/* HEADER BRAND BLOCK */}
        <header className="text-center mb-6 md:mb-10 select-none">
          <p className="text-[10px] font-mono tracking-[0.5em] text-stone-600 uppercase mb-1.5">
            Central Terminal // Matrix Portal
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-widest font-serif text-stone-200 uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Burnie&apos;s World
          </h1>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-stone-700 to-transparent mx-auto mt-3" />
        </header>

        {/* REUSABLE PORTAL LINK TILES DECK */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 md:mb-10">
          <ProjectTile
            title="The Abandoned Mine"
            description="A high-tension psychological survival text horror game loop. Monitor your sanity metrics, guard your lantern oil reserves, and survive the dark depths."
            linkUrl="https://burniesworld.com"
            status="live"
            accentColor="#d97706"
            icon="🪓"
          />
          <ProjectTile
            title="The Lost Jungle"
            description="An untamed text adventure tracking through dense, volatile ecosystems. Balance your hydration, map your coordinates, and avoid hidden apex predators."
            linkUrl="#"
            status="in-progress"
            accentColor="#10b981"
            icon="🌿"
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
        <section className="w-full max-w-xl border border-stone-900 bg-stone-950/60 rounded-xl p-5 text-center shadow-lg backdrop-blur-sm select-none">
          <h3 className="text-[10px] font-mono tracking-[0.3em] text-amber-600/80 uppercase mb-3">
            🤖 Transmission Node // System Humour
          </h3>
          <div className="min-h-[3rem] flex items-center justify-center px-4">
            <p
              className={`text-xs md:text-sm font-serif italic text-stone-400 transition-opacity duration-300 leading-relaxed ${loading ? "opacity-40 animate-pulse" : "opacity-100"}`}
            >
              &quot;{joke}&quot;
            </p>
          </div>
          <button
            onClick={fetchDailyJoke}
            disabled={loading}
            className="mt-4 px-4 py-1.5 border border-stone-800 rounded bg-[#070709] text-stone-500 hover:text-amber-500 hover:border-amber-900/60 font-mono text-xs tracking-wider transition-all duration-300 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed select-none"
          >
            {loading ? "Re-linking Grid..." : "Request Another Transmission"}
          </button>
        </section>
      </div>

      {/* UNIFIED RESPONSIVE FOOTER STRUCTURE */}
      <footer className="w-full max-w-5xl z-10 select-none flex flex-col items-center gap-3 pt-3 border-t border-stone-950/40">
        {/* ROW 1: BUTTON AND DISCLAIMER */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center sm:text-left">
          <div className="flex-shrink-0">
            <a
              href="https://ko-fi.com/brunopaquette"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 border border-stone-800/80 rounded-lg bg-[#070709] text-stone-300 hover:text-white hover:border-amber-900/60 hover:bg-amber-950/20 text-xs font-mono tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md group"
            >
              <span
                className="text-[110%] inline-block transition-all duration-300 group-hover:animate-bounce"
                style={{
                  filter:
                    "sepia(1) saturate(50) hue-rotate(10deg) brightness(1) drop-shadow(0 0 3px rgba(255, 196, 57, 0.26))",
                }}
              >
                ☕
              </span>

              {/* TEXT MATCHING THE FONT & COLOR OF STORY CHOICES */}
              <span className="font-serif text-sm tracking-wide text-stone-400 group-hover:text-amber-500 transition-colors duration-300">
                Buy me a coffee
                <span className="text-white-500 group-hover:text-amber-500 ml-1.5 transition-colors duration-300">
                  ♥
                </span>
              </span>
            </a>
          </div>
          <p className="text-[9px] font-mono tracking-[0.2em] text-stone-600 uppercase pointer-events-none">
            • Contributions are 100% voluntary and strictly non-refundable.
          </p>
        </div>

        {/* ROW 2: COPYRIGHT */}
        <div className="text-center pointer-events-none w-full">
          <p className="text-[9px] font-mono tracking-[0.15em] text-stone-700 uppercase leading-relaxed">
            © {new Date().getFullYear()} BurniesWorld • All matrix nodes operate
            completely serverless. Your browser. Your data. Your adventure.
          </p>
        </div>
      </footer>
    </main>
  );
}
