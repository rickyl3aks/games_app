import { useState } from "react";
import { GameApi } from "../API/api";
import { mapping } from "./models";
import "./games.css";
import GameData from "../gameData/GameData";

export const Games = () => {
  const [count, setCount] = useState(1);
  const { data, isLoading, isError } = GameApi(count);

  if (isError) {
    return <div>There has been an error</div>;
  }

  return (
    <div>
      <h1 className="title">Game app</h1>
      <div className="btn-container">
        <button onClick={() => setCount(count === 1 ? 1 : count - 1)} className="arrow previous"></button>
        <button onClick={() => setCount(count + 1)} className="arrow next"></button>
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container">
          {data.results
            ?.sort((a: any, b: any) => b.released.substring(0, 4) - a.released.substring(0, 4))
            .map((game: mapping) => (
              <GameData key={game.id} game={game} />
            ))}
        </div>
      )}
    </div>
  );
};
