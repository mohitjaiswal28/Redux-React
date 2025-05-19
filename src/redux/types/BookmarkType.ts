export interface Bookmark {
  id: string;
  title: string;
  url: string;
}

export const ADD_BOOKMARK = "ADD_BOOKMARK";
export const REMOVE_BOOKMARK = "REMOVE_BOOKMARK";

export interface BookmarkState {
  bookmarks: Bookmark[];
}

interface AddBookmarkAction {
  type: typeof ADD_BOOKMARK;
  payload: Bookmark;
}

interface RemoveBookmarkAction {
  type: typeof REMOVE_BOOKMARK;
  payload: string;
}

export type BookmarkActionTypes = AddBookmarkAction | RemoveBookmarkAction;
