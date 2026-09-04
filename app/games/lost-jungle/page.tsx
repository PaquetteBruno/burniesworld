import GameEngine from "@/components/game/GameEngine";

export default function LostJunglePage() {
  return (
    <GameEngine
      background="/games/lost-jungle/jungle.webp"
      title="The Lost Jungle"
      image="/games/lost-jungle/jungle.webp"
      introduction={[
        "The last thing you remember is the sound of the helicopter disappearing beyond the canopy. Now there is only rain.",
        "Your equipment is intact. Your radio still works, although there is no one answering. The map says you should be less than a day's walk from the extraction point.",
        "It has been three days.",
        "The jungle should be impossible to navigate. Instead, it seems to be leading you somewhere.",
        "You find an abandoned campsite buried beneath the vegetation. The equipment is decades old. The journal beside it is remarkably well preserved.",
        "You recognize the handwriting. You have never seen it before. There are no footprints around the camp except yours.",
        "And yet, every morning, you discover something new waiting beside your tent.",
        "Something that you don't remember bringing with you.",
        "The map is becoming less useful.",
        "Your memories are becoming less reliable.",
        "And somewhere beyond the trees, something has begun to answer your radio.",
      ]}
      music="/games/lost-jungle/jungle.ogg"
      startLabel="IN PROGRESS..."
    />
  );
}
