interface GameEngineProps {
  background: string;
  title: string;
}

export default function GameEngine({ background, title }: GameEngineProps) {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          marginTop: "30px",
          fontSize: "48px",
          fontWeight: "bold",
          color: "white",
          textShadow: "2px 2px 6px black",
        }}
      >
        {title}
      </h1>
    </main>
  );
}
