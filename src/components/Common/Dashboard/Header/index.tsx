import "./Header.css";

import type { ReactNode } from "react";
import { MdNotificationsNone } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import {
  getCurrentUser,
  logout,
} from "../../../../constants/authStorage";

type HeaderProps = {
  leftContent?: ReactNode;
};

const Header = ({ leftContent }: HeaderProps) => {
  const navigate = useNavigate();

  const currentUser = getCurrentUser();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <header className="dashboard-header">

      <div className="header-content">
        {leftContent}
      </div>

      <div className="header-right">
        <button className="notification-btn">
          <MdNotificationsNone />
        </button>

        <div className="user-info">
          <div className="user-avatar">
            {currentUser?.fullName?.charAt(0).toUpperCase()}
          </div>

          <div className="user-details">
            <h4>{currentUser?.fullName}</h4>
            <p>{currentUser?.email}</p>
          </div>
        </div>

        <button
          className="header-logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

    </header>
  );
};

export default Header;