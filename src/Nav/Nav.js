import { NavLink } from "react-router-dom";
import { useContext } from "react";
import userContext from "../userContext";

/** Nav Component
 * Props: logOut function to call in App
 * State: none
 * App -> Nav
 */

function Nav({ logOut }) {
  const { username } = useContext(userContext);

  /** calls logout function in App */
  function handleLogOut() {
    logOut();
  }

  return (
    <nav className="nav container">
      <div className="navbar navbar-light bg-light vw-100 border border-secondary border-3 rounded">
        <div className="nav-home">
          <NavLink classname="navbar-brand" to="/" end>
            Jobly
          </NavLink>
        </div>
        {username ? (
          <div className="nav-right">
            <NavLink to="/companies " end>
              Companies
            </NavLink>
            <NavLink to="/jobs" end>
              Jobs
            </NavLink>
            <NavLink to="/profile" end>
              Profile
            </NavLink>
            <NavLink to="/" onClick={handleLogOut} end>
              Log out {username}
            </NavLink>
          </div>
        ) : (
          <div className="nav-right">
            <NavLink to="/register" end>
              Sign Up
            </NavLink>
            <NavLink to="/login" end>
              Login
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
