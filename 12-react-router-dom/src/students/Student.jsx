import { Link, Outlet } from "react-router-dom";

function Student() {
  return (
    <>
      <h1>🎓 Student Portal</h1>

      <nav>
        <Link to="profile">Profile</Link> | <Link to="results">Results</Link> |{" "}
        <Link to="attendance">Attendance</Link>
      </nav>

      <hr />

      <Outlet />
    </>
  );
}

export default Student;
