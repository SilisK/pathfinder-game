import Gameplay from "./Gameplay";

export default function Game({ seed }) {
  return (
    // <div className="z-10 game grid place-items-center w-full min-h-full">
    //   <div className="modal sm:border rounded px-3 pt-3 pb-1 w-max">
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