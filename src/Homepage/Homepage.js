import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import userContext from "../userContext";

/** Homepage Component
 * Props: none
 * State: none
 * RoutesList -> Homepage
 */

function Homepage() {
  const { username } = useContext(userContext);
  const navigate = useNavigate();

  function handleLoginClick() {
    navigate("/login");
  }

  function handleRegisterClick() {
    navigate("/register");
  }

  return (
    <div className="Homepage container d-flex justify-content-center">
      <div className="card col-4 col-12-small d-flex justify-content-center border border-3 border-secondary">
      <h1 className="mt-3">JOBLY</h1>
      <p className="mb-1">All the jobs in one, convenient place.</p>
      {username ? (
        <h3>Welcome Back, {username}!</h3>
      ) : (
        <div>
          <button onClick={handleLoginClick} className="btn-primary btn m-3">Login</button>
          <button onClick={handleRegisterClick} className="btn-primary btn m-3">Register</button>
        </div>
      )}
      </div>
    </div>
  );
}

export default Homepage;
