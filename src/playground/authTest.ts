import {
  registerUser,
  getUsers,
  findUserByEmail,
  loginUser,
  getCurrentUser,
  logout,
  isAuthenticated,
} from "../constants/authStorage";

import type{ User } from "../models/User";

export const testAuthStorage = () => {
  localStorage.clear();

  const user: User = {
    id: crypto.randomUUID(),
    fullName: "John Doe",
    schoolName: "ABC School",
    email: "john@gmail.com",
    password: "Password@123",
    createdAt: new Date().toISOString(),
  };

  registerUser(user);

  console.log("Users:", getUsers());

  console.log("Find User:", findUserByEmail("john@gmail.com"));

  console.log("Login:", loginUser("john@gmail.com", "Password@123"));

  console.log("Current User:", getCurrentUser());

  console.log("Authenticated:", isAuthenticated());

  logout();

  console.log("Authenticated After Logout:", isAuthenticated());
};