import { useState } from "react";
import { GameApi } from "../API/api";
import { Images } from "../images/images";
import { mapping } from "./models";
import Platforms from "../platforms/platforms";
import { Infos } from "../infos/infos";
import "./games.css";

export const Games = () => {
  const [open, setOpen] = useState<string>("");
  const { data, isLoading, isError } = GameApi();

  if (isLoading) {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    );
  }

  if (isError) {
    return <div>There has been an error</div>;
  }

  const openInfo = (id: string) => {
    setOpen(id);
  };

  const closeInfo = () => {
    setOpen("");
  };

  return (
    <div className="container">
      {data.results
        ?.sort(
          (a: any, b: any) =>
            b.released.substring(0, 4) - a.released.substring(0, 4)
        )
        .map((game: mapping) => (
          <div
            key={game.id}
            style={{ backgroundColor: `#${game.dominant_color}`, width: 300 }}
            className="items"
            onMouseOver={() => openInfo(game.id)}
            onMouseOut={() => closeInfo()}
          >
            <Images screenshots={game.short_screenshots} />
            <div className="infos">
              <Platforms game={game} />
              <p className="name">{game.name}</p>
            </div>
            <div style={{ transition: ".1s" }}>
              <Infos open={open} game={game} />
            </div>
          </div>
        ))}
    </div>
  );
};
