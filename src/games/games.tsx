import * as React from "react";
import { useState } from "react";
import { GameApi } from "../API/api";
import { Infos } from "../infos/infos";
import "./games.css";
import Platforms from "../platforms/platforms";

export const Games = () => {
  const [open, setOpen] = useState("");
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

  const openInfo = (id: any) => {
    setOpen(id);
  };

  return (
    <div className="container">
      {data.results?.map((game: any) => {
        return (
          <div
            key={game.id}
            style={{ backgroundColor: `#${game.dominant_color}`, width: 300 }}
            className="items"
            onMouseOver={() => openInfo(game.id)}
          >
            <img
              src={game.background_image}
              alt={game.name}
              style={{ width: 300, borderRadius: ".5rem .5rem 0rem 0rem" }}
            ></img>
            <div className="infos">
              <Platforms game={game} />
              <p className="name">{game.name}</p>
            </div>
            <div style={{ transition: ".1s" }}>
              <Infos open={open} game={game} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
