import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const gameDataSlice = createSlice({
  name: "gameData",
  initialState,
  reducers: {
    setGameData: (state: any, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setGameData } = gameDataSlice.actions;
export default gameDataSlice.reducer;
