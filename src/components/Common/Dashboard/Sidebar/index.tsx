import "./Sidebar.css";
import schoolLogo from "../../../../assets/udemyimage.png";
import { NavLink, useNavigate } from "react-router-dom";
import { getCurrentUser, logout } from "../../../../constants/authStorage";
import { sidebarMenus } from "./sidebarData";

const Sidebar = () => {
  const navigate = useNavigate();
  const user = getCurrentUser();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-logo">
          <img
    src={schoolLogo}
    alt="School Logo"
    className="brand-logo-image"
  />
  </div>

        <div className="brand-details">
          <h3>{user?.schoolName}</h3>
        </div>
      </div>

      <nav className="sidebar-nav">
        {sidebarMenus.map((menu) => {
          const Icon = menu.icon;
          const isImage = typeof Icon === "string";

          return (
            <NavLink
              key={menu.path}
              to={menu.path}
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
            >
              <span className="sidebar-icon">
                {isImage ? (
                  <img
                    src={Icon}
                    alt={menu.title}
                    className="sidebar-icon-image"
                  />
                ) : (
                  <Icon />
                )}
              </span>

              <span className="sidebar-title">{menu.title}</span>
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