import { User } from "@/redux/slices/usersSlice";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(word: string) {
  return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
}

export function findUserWithPassword(users: User[], usernameOrEmail: string, password: string) {
  const user = users.find(
    (user) =>
      (user.username === usernameOrEmail || user.email === usernameOrEmail) &&
      user.password === password,
  );

  return user;
}

export function findUser(users: User[], usernameOrEmail: string) {
  const user = users.find(
    (user) => user.username === usernameOrEmail || user.email === usernameOrEmail,
  );

  return user;
}
