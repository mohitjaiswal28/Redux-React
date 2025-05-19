import {
  type BookmarkState,
  type BookmarkActionTypes,
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
} from "../types/BookmarkType";

const initialState: BookmarkState = {
  bookmarks: [],
};

export const bookmarkReducer = (
  state = initialState,
  action: BookmarkActionTypes
): BookmarkState => {
  switch (action.type) {
    case ADD_BOOKMARK:
      return {
        ...state,
        bookmarks: [action.payload, ...state.bookmarks],
      };

    case REMOVE_BOOKMARK:
      return {
        ...state,
        bookmarks: state.bookmarks.filter((b) => b.id !== action.payload),
      };

    default:
      return state;
  }
};
