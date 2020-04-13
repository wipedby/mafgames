import { combineReducers } from "redux";
import { gameReducer } from "./gameReducer";
import { playerReducer } from "./playerReducer";

export const rootReducer = combineReducers({
  game: gameReducer,
  player: playerReducer,
});