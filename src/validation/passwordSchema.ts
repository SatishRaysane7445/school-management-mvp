import * as Yup from "yup";
import { REGEX } from "./regex";

export const passwordSchema = Yup.object({
  password: Yup.string()
    .required("Password is required")
    .matches(
      REGEX.PASSWORD,
      "Password must contain uppercase, lowercase, number and special character"
    ),

  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf(
      [Yup.ref("password")],
      "Passwords do not match"
    ),
});