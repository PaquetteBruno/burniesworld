interface GameShellProps {
  title: string;
  children: React.ReactNode;
}

export default function GameShell({ title, children }: GameShellProps) {
  return (
    <main>
      <h1>{title}</h1>

      {children}
    </main>
  );
}
