import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2>Profile</h2>
      <p>Email: {user?.email}</p>
    </div>
  );
};

export default Profile;
