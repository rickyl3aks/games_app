import * as React from "react";
import { GameApi } from "../API/api";
import "./games.css";
import Info from "../info/info";

export const Games = () => {
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

  return (
    <div className="container">
      {data.results?.map((game: any) => {
        return (
          <div key={game.id} className="items">
            <img
              src={game.background_image}
              alt={game.name}
              style={{ width: 300, borderRadius: "5px 5px 0px 0px" }}
            ></img>
            <div className="infos">
              <Info game={game} />
              <p className="name">{game.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
