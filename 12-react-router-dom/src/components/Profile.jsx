import { useLocation } from "react-router-dom";
function Profile() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h1>profile</h1>
      <h3>{location.pathname}</h3>
      <h3>{location.state.name}</h3>
      <h3>{location.state.age}</h3>
      <h3>{location.state.course}</h3>
    </>
  );
}

export default Profile;
