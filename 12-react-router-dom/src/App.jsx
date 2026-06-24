import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
// import About from "./components/pages/About";
// import Contact from "./components/pages/Contact";
// import Services from "./components/pages/Services";
// import Navbar from "./components/Navbar";
// import Login from "./components/Login";
import Products from "./components/Products";
// import Student from "./components/students/Student";
// import Profile from "./components/students/Profile";
// import Results from "./components/students/Results";
// import Attendance from "./components/students/Attendance";
// import Products from "./components/Products";
// import Student from "./components/studentdetails/Student";
import Profile from "./components/Profile";
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

      {/* useParams */}

      {/* <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products/:id" element={<Products />} />

        <Route path="/products/:userId/:postId" element={<Products />}></Route>
      </Routes> */}

      {/* Nested Routes  */}

      {/* <Routes>
        <Route path="/student" element={<Student />}>
          <Route path="profile" element={<Profile />} />
          <Route path="results" element={<Results />} />
          <Route path="attendance" element={<Attendance />} />
        </Route>
      </Routes> */}

      {/* useParams Hook and dynamic routes  */}

      {/* <Route
        path="/student/:id/name/:name/course/:course"
        element={<Student />}
      /> */}

      {/* // useNavigate Hook  */}

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="profile" element={<Profile />} />
        <Route path="results" element={<Results />} />
        <Route path="attendance" element={<Attendance />} />
      </Routes> */}

      {/* useSearchParams */}

      {/* <Routes>
        <Route path="/products" element={<Products />}></Route>
      </Routes> */}

      {/* useLocation */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
