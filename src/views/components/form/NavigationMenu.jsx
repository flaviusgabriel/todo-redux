import { logout } from "../../../context/actions/auth";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const NavigationMenu = () => {
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
    window.location.reload();
  }, [dispatch]);

  //navigate to profile
  const navigate = useNavigate();
  const routeChange = () => {
    const path = `/profile`;
    navigate(path);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid ">
        <a className="navbar-brand" href="#">
          ToDo App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Dashboard
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Profile
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" onClick={routeChange}>
                    Profile
                  </a>
                </li>
                <li>
                  <a href="/" className="dropdown-item" onClick={logOut}>
                    LogOut
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;
