import { makeHttpRequest } from "./makeHttpRequest";

export const GameSearch = async (search: string | undefined) => {
  const url = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&search=${search}`;
  return makeHttpRequest(url);
};

export const GetInfo = async (id: string | undefined) => {
  const url = `https://api.rawg.io/api/games/${id}?key=${process.env.REACT_APP_API_KEY}`;
  return makeHttpRequest(url);
};

export const GameApi = async (page: number) => {
  const url = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&page=${page}`;
  return makeHttpRequest(url);
};
