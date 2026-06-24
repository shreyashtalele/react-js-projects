import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import ProtectedRoutes from "./ProtectedRoutes";
import Dashboard from "./Dashboard";
import Home from "./Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />

        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
