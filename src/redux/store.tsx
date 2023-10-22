import { configureStore, combineReducers } from "@reduxjs/toolkit";
import gameDataReducer from "./features/gameDataSlice";
import infoDataReducer from "./features/infoData";

const rootReducer = combineReducers({
  gameData: gameDataReducer,
  infoData: infoDataReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
