import { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import arrow from "../assets/arrow.png";
import "../Layout/Layout.css";

export default function ListPosts() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Funzione per gestire l'apertura e la chiusura del menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Funzione per chiudere il menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Gestore per chiudere il menu quando si clicca fuori
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Effetto per aggiungere l'ascoltatore di eventi quando il componente è montato
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <>
      <button className="btn btn-dark col-4 mb-2 button-custom" onClick={toggleMenu}>
        {"TITOLI"}<img src={arrow} alt="arrow icon" />
      </button>
      <div
        ref={dropdownRef}
        className={`dropdown-menu dropdown-menu-custom ${isOpen ? "show" : ""}`}
      >
        <div className="dropdown-item">
          <Link
            to="/Post1"
            className={({ isActive }) => (isActive ? "link active" : "link")}
           
          >
            {"L'importanza della natura per i bambini"}
          </Link>
        </div>

        <div className="dropdown-item">
          <Link
            to="/Post2"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            {"La carenza di relazione con la natura e gli animali nei bambini"}
          </Link>
        </div>

        <div className="dropdown-item">
          <Link
            to="/Post3"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            {
              "Il nostro evento ha riscosso un gran successo, la raccolta fondi prosegue"
            }
          </Link>
        </div>

        <div className="dropdown-item">
          <Link
            to="/Post4"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            {
              "L'importanza di ristabilire il legame perduto tra uomo, animali e natura"
            }
          </Link>
        </div>

        <div className="dropdown-item">
          <Link
            to="/Post5"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            {
              "Inquinamento: l'urgenza di agire per il futuro del nostro pianeta"
            }
          </Link>
        </div>

        <div className="dropdown-item">
          <button className="btn btn-link px-0" onClick={closeMenu}>Chiudi</button>
        </div>
      </div>
    </>
  );
}
