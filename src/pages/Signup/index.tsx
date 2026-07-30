import './Signup.css';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../Layouts/AuthLayout';
import Button from '../../components/Common/Button';
import Input from '../../components/Common/Input';
import { Formik } from 'formik';
import { signupSchema } from '../../validation/signupSchema';
import { findUserByEmail } from '../../constants/authStorage';

const Signup = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout title="Welcome, create your school account">
      <Formik
        initialValues={{
          fullName: '',
          schoolName: '',
          email: '',
        }}
        validationSchema={signupSchema}
        onSubmit={(values, { setFieldError }) => {
          const existingUser = findUserByEmail(values.email);

          if (existingUser) {
            setFieldError('email', 'This email is already registered.');

            return;
          }

          navigate('/signup-password', {
            state: values,
          });
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
            <p className="signup-subtitle">
              It is our great pleasure to have you on board!
            </p>

            <Input
              name="fullName"
              placeholder="Enter your name"
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.fullName}
              touched={touched.fullName}
            />
            <Input
              name="schoolName"
              placeholder="Enter school name"
              value={values.schoolName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.schoolName}
              touched={touched.schoolName}
            />
            <Input
              name="email"
              type="email"
              placeholder="Enter school email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              touched={touched.email}
            />

            <Button title="Next" onClick={() => handleSubmit()} />

            <p className="login-text">
              Already have an account?
              <span className="login-link" onClick={() => navigate("/login")}> Sign In</span>
            </p>
          </>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default Signup;
