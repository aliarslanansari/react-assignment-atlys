import { users } from "@/data";
import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  name: string;
  profile_picture: string;
  createdAt: string;
}

interface UserState {
  users: User[];
  idCounter: number;
}

const initialState: UserState = {
  users: users,
  idCounter: users.length,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.idCounter += state.idCounter;
      const id = state.idCounter;
      state.users = [...state.users, { ...action.payload, id }];
    },
  },
});

export const { addUser } = usersSlice.actions;

export const usersSelector = (state: RootState) => state.users;

export const selectUserById = (userId: number) => (state: RootState) =>
  state.users.users.find((user) => user.id === userId);

const usersSliceReducer = usersSlice.reducer;

export default usersSliceReducer;
