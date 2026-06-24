import { Navigate, useNavigate } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    // <>
    //   <div>
    //     <h1>Welcome to Home Page</h1>
    //     <nav>
    //       <NavLink
    //         to="profile"
    //         style={({ isActive }) => ({
    //           color: isActive ? "red" : "black",
    //         })}
    //       >
    //         Profile
    //       </NavLink>{" "}
    //       |
    //       <NavLink
    //         to="results"
    //         style={({ isActive }) => ({
    //           color: isActive ? "red" : "black",
    //         })}
    //       >
    //         Results
    //       </NavLink>{" "}
    //       |{" "}
    //       <NavLink
    //         to="attendance"
    //         style={({ isActive }) => ({
    //           color: isActive ? "red" : "black",
    //         })}
    //       >
    //         Attendance
    //       </NavLink>
    //     </nav>
    //     <button onClick={() => navigate(-1)}>Go Back</button>
    //     <hr />

    //     <Outlet />
    //     {/* <button onClick={() => navigate("/student")}>
    //       Go to Student Page{" "}
    //     </button> */}
    //     <br />
    //   </div>
    // </>

    <>
      <button
        onClick={() =>
          navigate("/profile", {
            state: {
              name: "John",
              age: 22,
              course: "React",
            },
          })
        }
      >
        Go to Profile
      </button>
    </>
  );
}

export default Home;
