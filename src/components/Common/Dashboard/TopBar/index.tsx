import "./TopBar.css";

import { MdNotificationsNone } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { logout } from "../../../../constants/authStorage";

const TopBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <div className="topbar">
      <button className="notification-btn">
        <MdNotificationsNone />
      </button>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default TopBar;