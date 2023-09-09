import {combineReducers, createStore} from "redux";
import {todos} from "./todoReducer";
import {visibilityFilter} from "./visibilityFilter";

const reducers = combineReducers({
  todos,
  visibilityFilter,
})

export const store = createStore(reducers);