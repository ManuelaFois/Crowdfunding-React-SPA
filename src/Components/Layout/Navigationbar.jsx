import { NavLink } from "react-router-dom";

export default function Navigationbar() {
  return (
    <>
      <div className="container-fluid px-0 mx-0">
        <div className="nav justify-content-start m-0">
          <div className="nav-item mx-2 mx-sm-2 mx-md-4 lg-mx-5 xl-mx-5">
            <div>{"Natura in movimento A.P.S"}</div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0 mx-0">
        <ul className="nav justify-content-end">
          <li className="nav-item mx-2 mx-sm-2 mx-md-4 lg-mx-5 xl-mx-5">
            <div>
              <NavLink
                to="/Home"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                Home
              </NavLink>
            </div>
          </li>
          <li className="nav-item mx-2 mx-sm-2 mx-md-4 lg-mx-5 xl-mx-5">
            <div>
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                {"Chi siamo"}
              </NavLink>
            </div>
          </li>

          <li className="nav-item mx-2 mx-sm-2 mx-md-4 lg-mx-5 xl-mx-5">
            <div>
              <NavLink
                to="/Blog"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                Articoli
              </NavLink>
            </div>
          </li>
          <li className="nav-item mx-2 mx-sm-2 mx-md-4 lg-mx-5 xl-mx-5">
            <div>
              <NavLink
                to="/Donations"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                Donazioni
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
