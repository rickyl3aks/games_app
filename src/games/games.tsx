import { useEffect, useState } from "react";
import { mapping } from "./models";
import style from "./games.module.css";
import GameData from "../gameData/GameData";
import Search from "../search/search";
import GameCount from "../gameCount/gameCount";
import { GameApi } from "../API/APIRequest";
import { useDispatch, useSelector } from "react-redux";
import { setGameData } from "../redux/features/gameDataSlice";

export const Games = () => {
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<string | null>(null);
  const [filteredData, setFilteredData] = useState<any>();
  const [prevFilteredData, setPrevFilteredData] = useState();
  const [showButtons, setShowButtons] = useState(true);

  const dispatch = useDispatch();
  const dataGame = useSelector((state: any) => state.gameData);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      if (dataGame && dataGame.hasOwnProperty(count)) {
        const gameResult = dataGame[count];
        setFilteredData(gameResult);
        setPrevFilteredData(gameResult);
        setIsLoading(false);
        return;
      }
      try {
        const data = await GameApi(count);
        if (data.results) {
          dispatch(setGameData({ [count]: data.results }));
          setFilteredData(data.results);
          setShowButtons(true);
          setPrevFilteredData(data.results);
          setIsError(null);
        }
      } catch (error) {
        const typedError = error as Error;
        setIsError(typedError.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [count, dataGame, dispatch]);

  if (isError) {
    return <div style={{ color: "white" }}>There has been an error</div>;
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
      <h1 className={style.rawg}>
        {" "}
        <a href="https://api.rawg.io/docs/" target="_blank" rel="noopener noreferrer">
          Supported by Rawg
        </a>
      </h1>
      <h1 className={style.title}>Game Hub</h1>
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
