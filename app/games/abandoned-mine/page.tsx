import GameEngine from "@/components/game/GameEngine";

export default function AbandonedMinePage() {
  return (
    <GameEngine
      background="/games/abandoned-mine/mine.webp"
      title="The Abandoned Mine"
      image="/games/abandoned-mine/mine.webp"
      introduction={[
        "The wind howls across the jagged peaks of the Blackwood Ridge. Before you lies the yawning chasm of Pit 4—a forgotten labyrinth sealed fifty years ago after a sudden collapse. They say something still breathes down in the dark. Armed with nothing but a failing lantern and your instincts, you step across the threshold.",
      ]}
      music="/games/abandoned-mine/mine.ogg"
      startLabel="DESCEND INTO DARKNESS"
    />
  );
}
