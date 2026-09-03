interface GameShellProps {
  children: React.ReactNode;
}

export default function GameShell({ children }: GameShellProps) {
  return (
    <main className="min-h-screen bg-[#020203] text-stone-200 flex flex-col">
      {/* GAME HEADER */}
      <header className="border-b border-stone-900 px-6 py-4">
        <h1 className="text-lg font-serif tracking-widest uppercase">
          Game Framework
        </h1>
      </header>

      {/* MAIN GAME AREA */}
      <section className="flex-1 p-6">{children}</section>

      {/* GAME FOOTER */}
      <footer className="border-t border-stone-900 px-6 py-3 text-center">
        <p className="text-[9px] font-mono tracking-widest text-stone-700 uppercase">
          Burnie&apos;s World // Game Framework
        </p>
      </footer>
    </main>
  );
}
