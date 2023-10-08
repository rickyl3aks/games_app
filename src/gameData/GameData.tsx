import { useRef } from "react";
import { Infos } from "../infos/infos";
import Platforms from "../platforms/platforms";
import { mapping } from "../games/models";
import { Img } from "react-image";
import Loading from "../loading/loading";
import style from "./gameData.module.css";
import CloseIcon from "../closeIcon/closeIcon";

const GameData = ({ game }: { game: mapping }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const missingImg = require("../imgNotFound/img.png");

  return (
    <div>
      <div className={style.items} onClick={() => dialogRef.current?.showModal()}>
        <div className={style.imgContainer}>
          <Img
            src={game.background_image}
            width={300}
            height={180}
            loading="lazy"
            alt={game.name}
            className={style.img}
            style={{ borderRadius: "0.5rem 0.5rem 0 0 " }}
            loader={<Loading />}
            unloader={<img src={missingImg} width={300} height={180} alt="img-not-found"></img>}
          />
        </div>
        <div className={style.infos}>
          <Platforms game={game} />
          <p className={style.name}>{game.name}</p>
        </div>
      </div>
      <dialog className={style.dialog} ref={dialogRef}>
        <CloseIcon onClick={() => dialogRef.current?.close()} />
        <Infos game={game} img={game.short_screenshots} />
      </dialog>
    </div>
  );
};

export default GameData;
