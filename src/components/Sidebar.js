import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const getActiveStyle = ({ isActive }) => ({
    margin: "1rem 0",
    fontWeight: isActive ? "600" : "200",
    color: isActive ? "red" : ""
  });

  return (
    <div className="sidebar">
      <nav>
        <NavLink style={getActiveStyle} to="/">
          Inbox
        </NavLink>
        <NavLink style={getActiveStyle} to="/starred">
          Starred
        </NavLink>
        <NavLink style={getActiveStyle} to="/spam">
          Spam
        </NavLink>
        <NavLink style={getActiveStyle} to="/trash">
          Trash
        </NavLink>
      </nav>
    </div>
  );
};

export { Sidebar };
