import { createStore, combineReducers } from "redux";
import { bookmarkReducer } from "./redux/reducers/BookmarkReducer";

const rootReducer = combineReducers({
  bookmark: bookmarkReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const store = createStore(rootReducer);
