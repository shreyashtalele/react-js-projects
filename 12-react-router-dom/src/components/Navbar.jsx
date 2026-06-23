import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    // <nav>
    //   <Link
    //     to="/"
    //     style={{
    //       marginRight: "20px",
    //       color: "red",
    //     }}
    //   >
    //     Home
    //   </Link>
    //   <Link
    //     to="/about"
    //     style={{
    //       marginRight: "20px",
    //       color: "red",
    //     }}
    //   >
    //     About
    //   </Link>
    //   <Link
    //     to="/contact"
    //     style={{
    //       marginRight: "20px",
    //       color: "red",
    //     }}
    //   >
    //     Contact
    //   </Link>
    //   <Link
    //     to="/services"
    //     style={{
    //       marginRight: "20px",
    //       color: "red",
    //     }}
    //   >
    //     Service
    //   </Link>
    // </nav>

    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
        })}
      >
        {" "}
        Home{" "}
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
        })}
      >
        {" "}
        About{" "}
      </NavLink>
      <NavLink
        to="/contact"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
        })}
      >
        {" "}
        Contact{" "}
      </NavLink>
      <NavLink
        to="Services"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
        })}
      >
        {" "}
        Services{" "}
      </NavLink>
    </nav>
  );
}
export default Navbar;
