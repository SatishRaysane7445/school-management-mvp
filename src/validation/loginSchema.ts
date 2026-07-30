import * as Yup from "yup";
import { REGEX } from "./regex";

export const loginSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .trim()
    .lowercase()
    .matches(REGEX.EMAIL, "Please enter a valid email address"),

  password: Yup.string()
    .required("Password is required")
    .matches(
      REGEX.PASSWORD,
      "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
    ),
});