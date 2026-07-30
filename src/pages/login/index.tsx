import './Login.css';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { loginSchema } from '../../validation/loginSchema';
import AuthLayout from '../../Layouts/AuthLayout';
import Button from '../../components/Common/Button';
import Input from '../../components/Common/Input';
import { authenticateUser, setCurrentUser } from '../../constants/authStorage';

const Login = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout title="Welcome, Log into your account">
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={(values, { setFieldError }) => {
          const user = authenticateUser(values.email, values.password);

          if (!user) {
            setFieldError('password', 'Invalid email or password.');

            return;
          }

          setCurrentUser(user);

          navigate('/dashboard');
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
            <p className="login-subtitle">
              It is our great pleasure to have you on board!
            </p>
            <Input
              name="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              touched={touched.email}
            />

            <Input
              name="password"
              type="password"
              placeholder="Enter Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password}
              touched={touched.password}
            />

            <Button title="Login" onClick={() => handleSubmit()} />

            <p className="signup-text">
              Don't have an account?
              <span className="signup-link" onClick={() => navigate('/')}>
                Sign up
              </span>
            </p>
          </>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default Login;
