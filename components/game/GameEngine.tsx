"use client";

import { useRef, useState } from "react";

interface GameEngineProps {
  background: string;
  title: string;
  image: string;
  introduction: string[];
  music: string;
  startLabel: string;
}

export default function GameEngine({
  background,
  title,
  image,
  introduction,
  music,
  startLabel,
}: GameEngineProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.target.value);

    setVolume(newVolume);

    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }

    if (newVolume > 0) {
      setIsMuted(false);
    }
  };

  const handleMute = () => {
    if (!audioRef.current) return;

    if (isMuted) {
      audioRef.current.volume = volume;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  return (
    <main
      className="min-h-[calc(100vh-75px)] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center p-6"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <section className="relative w-full min-h-[85vh] bg-black/85 border border-stone-800/80 rounded-xl shadow-2xl flex flex-col">
        {/* GAME HEADER */}
        <header className="relative border-b border-stone-900 px-6 py-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-widest text-stone-200 uppercase">
            {title}
          </h1>

          {/* VOLUME CONTROL */}
          <div className="absolute top-1/2 right-6 -translate-y-1/2 flex items-center gap-2">
            <button
              type="button"
              onClick={handleMute}
              className="text-stone-500 hover:text-amber-500 transition-colors cursor-pointer text-sm"
              aria-label={isMuted ? "Unmute music" : "Mute music"}
            >
              {isMuted ? "🔇" : "🔊"}
            </button>

            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-24 accent-amber-700 cursor-pointer"
              aria-label="Music volume"
            />
          </div>
        </header>

        {/* GAME INTRODUCTION */}
        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* GAME IMAGE */}
            <div className="w-full">
              <img
                src={image}
                alt={title}
                className="w-full rounded-lg border border-stone-800 shadow-xl"
              />
            </div>

            {/* INTRODUCTION */}
            <div className="text-stone-300">
              {introduction.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-serif italic text-lg leading-relaxed mb-4 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* START BUTTON */}
        <div className="border-t border-stone-900 px-6 py-8 flex justify-center">
          <button
            type="button"
            className="px-12 py-4 border border-stone-700 rounded bg-[#070709] text-stone-400 hover:text-amber-500 hover:border-amber-900/60 font-mono text-xs tracking-[0.3em] transition-all duration-300 cursor-pointer"
          >
            {startLabel}
          </button>
        </div>

        {/* GAME MUSIC */}
        <audio
          ref={audioRef}
          src={music}
          autoPlay
          loop
          onLoadedMetadata={() => {
            if (audioRef.current) {
              audioRef.current.volume = volume;
            }
          }}
        />
      </section>
    </main>
  );
}
