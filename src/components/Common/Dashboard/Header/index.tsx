import './Header.css';

import { MdNotificationsNone } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import { getCurrentUser, logout } from '../../../../constants/authStorage';

const Header = () => {
  const navigate = useNavigate();

  const currentUser = getCurrentUser();

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <header className="dashboard-header">
      <div className="header-content">
        <h2>Learn how to launch faster</h2>

        <p>
          Watch our webinar for tips from our experts and get a
          limited time offer.
        </p>
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

         <button className="header-logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
