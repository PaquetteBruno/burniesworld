export default function Footer() {
  return (
    <footer className="w-full max-w-5xl mx-auto z-10 select-none flex flex-col items-center gap-3 pt-3 border-t border-stone-950/40">
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
  );
}
