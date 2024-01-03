import Gameplay from "./Gameplay";

export default function Game({ seed }) {
  return (
    <div className="z-40">
      <div className="">
        <Gameplay
          gameInfo={{
            ...seed,
            maxChoices: 3,
          }}
        />
      </div>
    </div>
  );
}
