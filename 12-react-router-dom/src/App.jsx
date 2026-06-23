import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Products from "./components/Products";
import Student from "./students/Student";
import Profile from "./students/Profile";
import Results from "./students/Results";
import Attendance from "./students/Attendance";
function App() {
  return (
    <>
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/services" element={<Services />}></Route>
      </Routes> */}

      {/* <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products/:id" element={<Products />} />

        <Route path="/products/:userId/:postId" element={<Products />}></Route>
      </Routes> */}

      <Routes>
        <Route path="/student" element={<Student />}>
          <Route path="profile" element={<Profile />} />
          <Route path="results" element={<Results />} />
          <Route path="attendance" element={<Attendance />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
