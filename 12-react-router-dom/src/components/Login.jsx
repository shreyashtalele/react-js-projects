import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function login() {
    alert("Login Successful");

    navigate("/", {
      replace: true,
    });
  }

  return <button onClick={login}>Login</button>;
}

export default Login;
