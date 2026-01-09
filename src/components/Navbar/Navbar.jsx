import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav style={styles.nav}>
      <h3>MyApp</h3>
      <div>
        {user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>{" "}
            <Link to="/profile">Profile</Link>{" "}
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>{" "}
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    background: "#eee",
  },
};

export default Navbar;
