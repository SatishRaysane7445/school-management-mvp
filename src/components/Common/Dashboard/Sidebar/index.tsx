import "./Sidebar.css";

import { NavLink, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";

import { sidebarMenus } from "./sidebarData";
import { logout } from '../../../../constants/authStorage';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-logo">
          SM
        </div>

        <div className="brand-details">
          <h3>School</h3>
          <p>Management</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        {sidebarMenus.map((menu) => {
          const Icon = menu.icon;

          return (
            <NavLink
              key={menu.path}
              to={menu.path}
              className={({ isActive }) =>
                isActive
                  ? "sidebar-link active"
                  : "sidebar-link"
              }
            >
              <span className="sidebar-icon">
                <Icon />
              </span>

              <span className="sidebar-title">
                {menu.title}
              </span>
            </NavLink>
          );
        })}
      </nav>

      {/* <div className="sidebar-footer">
        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          <MdLogout />

          Logout
        </button>
      </div> */}
    </aside>
  );
};

export default Sidebar;