import { Link, NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Student() {
  const navigate = useNavigate();
  return (
    <>
      <h1>🎓 Student Portal</h1>

      <nav>
        <NavLink to="profile">Profile</NavLink> |
        <NavLink to="results">Results</NavLink> |{" "}
        <NavLink to="attendance">Attendance</NavLink>
      </nav>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <hr />

      <Outlet />
    </>
  );
}

export default Student;
