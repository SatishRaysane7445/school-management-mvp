import "./Signup.css";

import { Formik } from "formik";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

import AuthLayout from "../../Layouts/AuthLayout";
import Button from "../../components/Common/Button";
import Input from "../../components/Common/Input";

import type { SignupStepOne } from "../../models/SignupStepOne";
import type { User } from "../../models/User";

import { passwordSchema } from "../../validation/passwordSchema";
import { registerUser } from "../../constants/authStorage";
const SignupPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state) {
    return <Navigate to="/" replace />;
  }

  const signupData = location.state as SignupStepOne;

  return (
    <AuthLayout title="Welcome, create your school account">
      <Formik
        initialValues={{
          password: "",
          confirmPassword: "",
        }}
        validationSchema={passwordSchema}
        onSubmit={(values) => {
          const newUser: User = {
            id: crypto.randomUUID(),
            fullName: signupData.fullName,
            schoolName: signupData.schoolName,
            email: signupData.email,
            password: values.password,
            createdAt: new Date().toISOString(),
          };

          registerUser(newUser);

          alert("Registration Successful!");

          navigate("/login");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <>
            <p className="password-title">
              Choose Password
            </p>

            <Input
              name="password"
              type="password"
              placeholder="Enter password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password}
              touched={touched.password}
            />

            <p className="password-title">
              Confirm Password
            </p>

            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.confirmPassword}
              touched={touched.confirmPassword}
            />

            <p className="password-info">
              Must contain at least 8 characters, one uppercase letter,
              one lowercase letter, one number and one special character.
            </p>

            <Button
              title="Register"
              onClick={() => handleSubmit()}
            />
          </>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default SignupPassword;