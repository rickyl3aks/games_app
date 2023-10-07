import { useEffect, useState } from "react";
import { GameApi } from "../API/api";
import { mapping } from "./models";
import "./games.css";
import GameData from "../gameData/GameData";
import Search from "../search/search";
import GameCount from "../gameCount/gameCount";

export const Games = () => {
  const [count, setCount] = useState(1);
  const [filteredData, setFilteredData] = useState<any>();
  const [prevFilteredData, setPrevFilteredData] = useState();

  const [showButtons, setShowButtons] = useState(true);
  const { data, isLoading, isError } = GameApi(count);

  useEffect(() => {
    if (!isLoading && !isError) {
      setFilteredData(data.results);
      setShowButtons(true);
    }
  }, [data, isLoading, isError]);

  if (isError) {
    return <div>There has been an error</div>;
  }

  const handleSearchData = (searchedData: string) => {
    setPrevFilteredData(filteredData);
    setFilteredData(searchedData);
    setShowButtons(false);
  };

  const handleBackToPrevious = () => {
    if (prevFilteredData) {
      setFilteredData(prevFilteredData);
      setShowButtons(true);
    }
  };

  return (
    <div>
      <h1 className="title">Game app</h1>
      <Search onSearch={handleSearchData} />
      {showButtons ? (
        <div className="btn-container">
          <button onClick={() => setCount(count === 1 ? 1 : count - 1)} className="arrow previous"></button>
          <button onClick={() => setCount(count + 1)} className="arrow next"></button>
        </div>
      ) : (
        <GameCount backToPrevious={handleBackToPrevious} />
      )}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container">
          {filteredData
            ?.filter((game: any) => game.released)
            .sort((a: any, b: any) => b.released.substring(0, 4) - a.released.substring(0, 4))
            .map((game: mapping) => (
              <GameData key={game.id} game={game} />
            ))}
        </div>
      )}
    </div>
  );
};
