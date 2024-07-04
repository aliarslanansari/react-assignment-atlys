import { posts } from "@/data";
import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Post {
  id: number;
  user_id: number;
  emoji: string;
  text: string;
  no_of_comments: number;
  created_at: string;
  is_edited: boolean;
  edited_time: string | null;
}

export interface PostFeedStateType {
  posts: Post[];
  idCounter: number;
}

const initialState: PostFeedStateType = {
  posts: posts,
  idCounter: posts.length,
};

export const postFeedSlice = createSlice({
  name: "postFeed",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.idCounter += state.idCounter;
      const id = state.idCounter;
      state.posts = [{ ...action.payload, id }, ...state.posts];
    },
    deletePost: (state, action: PayloadAction<number>) => {
      const postId = action.payload;
      state.posts = state.posts.filter((post) => post.id !== postId);
    },
  },
});

export const { addPost, deletePost } = postFeedSlice.actions;

export const postSelector = (state: RootState) => state.postFeed.posts;

const postFeedSliceReducer = postFeedSlice.reducer;

export default postFeedSliceReducer;
