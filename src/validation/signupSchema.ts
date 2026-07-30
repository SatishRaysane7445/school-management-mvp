import * as Yup from "yup";
import { REGEX } from "./regex";

export const signupSchema = Yup.object({
  fullName: Yup.string()
    .required("Full name is required")
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters")
    .matches(REGEX.NAME, "Only alphabets and spaces are allowed"),

  schoolName: Yup.string()
    .required("School name is required")
    .min(3, "Minimum 3 characters")
    .max(100, "Maximum 100 characters")
    .matches(
      REGEX.SCHOOL_NAME,
      "Invalid school name"
    ),

  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address")
    .matches(REGEX.EMAIL, "Invalid email format"),
});