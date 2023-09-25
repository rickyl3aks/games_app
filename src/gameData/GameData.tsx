import { useRef } from "react";
import { Infos } from "../infos/infos";
import Platforms from "../platforms/platforms";
import { mapping } from "../games/models";

const GameData = ({ game }: { game: mapping }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <div key={game.id} className="items" onClick={() => dialogRef.current?.showModal()}>
      <img src={game.background_image} width={300} height={180} alt={game.short_screenshots} style={{ borderRadius: "0.5rem 0.5rem 0 0 " }} />
      <div className="infos">
        <Platforms game={game} />
        <p className="name">{game.name}</p>
      </div>
      <div style={{ transition: ".1s" }}></div>
      <dialog key={game.id} ref={dialogRef}>
        <Infos game={game} img={game.short_screenshots} />
      </dialog>
    </div>
  );
};

export default GameData;
