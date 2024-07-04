import env from "@/env";
import { Post } from "@/redux/slices/postFeedSlice";
import { User } from "@/redux/slices/usersSlice";

export const users: User[] = [
  {
    id: 2,
    username: "john_doe",
    email: env.REACT_LOGIN_EMAIL,
    password: env.REACT_LOGIN_PASSWORD,
    name: "John Doe",
    createdAt: "2024-07-04T20:01:22.128Z",
    profile_picture: "/user-images/user-1.png",
  },
  {
    id: 1,
    username: "jane_smith",
    email: "jane@example.com",
    password: "password456",
    name: "Jane Smith",
    createdAt: "2024-07-04T20:01:22.128Z",
    profile_picture: "/user-images/user-2.png",
  },
];

export const posts: Post[] = [
  {
    user_id: 1,
    id: 1,
    emoji: "😊",
    text: "Hello there!",
    no_of_comments: 4,
    created_at: "2024-07-04T20:01:22.128Z",
    is_edited: true,
    edited_time: "2024-07-04T20:10:30.128Z",
  },
  {
    user_id: 2,
    id: 2,
    emoji: "😢",
    text: "Not feeling well today",
    no_of_comments: 4,
    created_at: "2024-07-04T20:01:22.128Z",
    is_edited: false,
    edited_time: "2024-07-04T20:10:30.128Z",
  },
];
