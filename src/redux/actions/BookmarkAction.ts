import {
  type Bookmark,
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  type BookmarkActionTypes,
} from "../types/BookmarkType";

export const addBookmark = (bookmark: Bookmark): BookmarkActionTypes => ({
  type: ADD_BOOKMARK,
  payload: bookmark,
});

export const removeBookmark = (id: string): BookmarkActionTypes => ({
  type: REMOVE_BOOKMARK,
  payload: id,
});
