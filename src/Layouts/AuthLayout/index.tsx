import "./AuthLayout.css";
import type { ReactNode } from "react";

type AuthLayoutProps = {
  title: string;
  children: ReactNode;
};

const AuthLayout = ({
  title,
  children,
}: AuthLayoutProps) => {
  return (
    <div className="auth-container">
      <div className="auth-content">
        <h1 className="auth-title">{title}</h1>

        <div className="auth-card">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;