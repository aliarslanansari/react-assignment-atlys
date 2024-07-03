import authSliceReducer from "@/redux/slices/authSlice";
import postFeedSliceReducer from "@/redux/slices/postFeedSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  postFeed: postFeedSliceReducer,
  auth: authSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
