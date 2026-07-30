import { STORAGE_KEYS } from "../constants/storage";
import type { User } from "../models/User";

export const getUsers = (): User[] => {
  const users = localStorage.getItem(STORAGE_KEYS.USERS);

  if (!users) {
    return [];
  }

  return JSON.parse(users);
};

export const saveUsers = (users: User[]) => {
  localStorage.setItem(
    STORAGE_KEYS.USERS,
    JSON.stringify(users)
  );
};

export const findUserByEmail = (
  email: string
): User | undefined => {
  const users = getUsers();

  return users.find(
    (user) => user.email.toLowerCase() === email.toLowerCase()
  );
};

export const registerUser = (
  user: User
): void => {
  const users = getUsers();

  users.push(user);

  saveUsers(users);
};

export const loginUser = (
  email: string,
  password: string
): User | null => {

  const user = findUserByEmail(email);

  if (!user) {
    return null;
  }

  if (user.password !== password) {
    return null;
  }

  localStorage.setItem(
    STORAGE_KEYS.CURRENT_USER,
    JSON.stringify(user)
  );

  return user;
};

export const getCurrentUser = (): User | null => {

  const user = localStorage.getItem(
    STORAGE_KEYS.CURRENT_USER
  );

  if (!user) {
    return null;
  }

  return JSON.parse(user);
};
export const setCurrentUser = (user: User) => {
  localStorage.setItem(
    STORAGE_KEYS.CURRENT_USER,
    JSON.stringify(user)
  );
};

export const logout = () => {
  localStorage.removeItem(
    STORAGE_KEYS.CURRENT_USER
  );
};

export const isAuthenticated = (): boolean => {
  return getCurrentUser() !== null;
};
export const authenticateUser = (
  email: string,
  password: string
): User | null => {

  const user = findUserByEmail(email);

  if (!user) {
    return null;
  }

  if (user.password !== password) {
    return null;
  }

  return user;
};

