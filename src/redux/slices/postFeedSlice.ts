import { RootState } from "@/redux";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Post {
  date: string;
  text: string;
  username: string;
  email: string;
  emoji: string;
}

export interface PostFeedStateType {
  posts: Post[];
}

const initialState: PostFeedStateType = {
  posts: [],
};

export const postFeedSlice = createSlice({
  name: "postFeed",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts = [...state.posts, action.payload];
    },
  },
});

export const { addPost } = postFeedSlice.actions;

export const postSelector = (state: RootState) => state.postFeed.posts;

const postFeedSliceReducer = postFeedSlice.reducer;

export default postFeedSliceReducer;
