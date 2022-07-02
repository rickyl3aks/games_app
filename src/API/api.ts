import { useEffect, useState } from "react";

export const GameApi = () => {
  const [data, setData] = useState(Object);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [isError, setIsError] = useState<unknown>(null);

  useEffect(() => {
    const getGames = async () => {
      try {
        setIsloading(true);
        const res = await fetch(
          `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`
        );
        const games = await res.json();
        setIsloading(false);
        setData(games);
      } catch (error) {
        setIsloading(false);
        setIsError(error);
      }
    };
    getGames();
  }, []);

  return { data, isLoading, isError };
};
