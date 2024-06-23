import { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import arrow from "../assets/arrow.png";
import "../Layout/Layout.css";

export default function ListPosts() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="dropdown-container p-0">
      <button className="btn btn-dark mb-2 button-custom" onClick={toggleMenu}>
        {"TITOLI"}<img src={arrow} alt="arrow icon" />
      </button>
      <div
        ref={dropdownRef}
        className={`dropdown-menu dropdown-menu-custom ${isOpen ? "show" : ""}`}
      >
        <div className="dropdown-item">
          <Link to="/Post1" className="link">
            {"L'importanza della natura per i bambini"}
          </Link>
        </div>

        <div className="dropdown-item">
          <Link to="/Post2" className="link">
            {"La carenza di relazione con la natura e gli animali nei bambini"}
          </Link>
        </div>

        <div className="dropdown-item">
          <Link to="/Post3" className="link">
            {"Il nostro evento ha riscosso un gran successo, la raccolta fondi prosegue"}
          </Link>
        </div>

        <div className="dropdown-item">
          <Link to="/Post4" className="link">
            {"L'importanza di ristabilire il legame perduto tra uomo, animali e natura"}
          </Link>
        </div>

        <div className="dropdown-item">
          <Link to="/Post5" className="link">
            {"Inquinamento: l'urgenza di agire per il futuro del nostro pianeta"}
          </Link>
        </div>

        <div className="dropdown-item">
          <button className="btn btn-link px-0" onClick={closeMenu}>Chiudi</button>
        </div>
      </div>
    </div>
  );
}
