import { Link } from "react-router-dom";

export default function CardSlider() {
  return (
    <div className="container col-9 col-md-7 col-lg-6 col-xl-5 col-xxl-5 align-content-center">
      <div className="row p-md-5 p-xxl-5 m-xxl-5 my-5">
        <div className="card bg-dark bg-opacity-75 text-center text-white">
          <div className="card-body">
            <h3 className="card-title">
              {"RESTITUIAMO LA NATURA ALLE NUOVE GENERAZIONI"}
            </h3>

            <p className="card-text">
              {"AIUTACI A RAGGIUNGERE IL NOSTRO OBIETTIVO"}
            </p>

            <div className="btn btn-light mx-5">
              <Link
                to="/Donations"
                className="link-dark text-decoration-none" 
              >
                {"SOSTIENICI"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}