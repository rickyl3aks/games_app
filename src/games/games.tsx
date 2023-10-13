import { useEffect, useState } from "react";
import { GameApi } from "../API/api";
import { mapping } from "./models";
import style from "./games.module.css";
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
      setPrevFilteredData(data.results);
    }
  }, [data, isLoading, isError]);

  if (isError) {
    return <div>There has been an error</div>;
  }

  const handleSearchData = (searchedData: string) => {
    setFilteredData(searchedData);
    setShowButtons(false);
  };

  const handleBackToPrevious = () => {
    setFilteredData(prevFilteredData);
    setShowButtons(true);
  };

  return (
    <div>
      <h1 className={style.title}>Game app</h1>
      <Search onSearch={handleSearchData} />
      {showButtons ? (
        <div className={style.btnContainer}>
          <button title="Previous page" onClick={() => setCount(count === 1 ? 1 : count - 1)} className={style.arrowPrevious}></button>
          <button title="Next page" onClick={() => setCount(count + 1)} className={style.arrowNext}></button>
        </div>
      ) : (
        <GameCount backToPrevious={handleBackToPrevious} />
      )}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={style.container}>
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
