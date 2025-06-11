import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-light bg-light mb-3 d-flex px-3">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Star_wars2.svg"
          alt="Star Wars Logo"
          className="cursor-pointer"
          style={{ height: "40px", width: "auto" }}
        />
      </Link>

      {/* Favorites Dropdown */}
      <div className="ml-auto position-relative">
        <button className="btn btn-outline-danger" onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={faHeart} /> Favorites {store.favorites.length}
          <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <ul className="dropdown-menu show position-absolute end-0 mt-2 p-2" style={{ right: 0, minWidth: "200px" }}>
            {store.favorites.length === 0 ? (
              <li className="dropdown-item text-muted">No favorites</li>
            ) : (
              store.favorites.map((fav, index) => (
                <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                  {fav.name}
                  <button className="btn btn-sm btn-danger" onClick={() => actions.removeFavorite(fav)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </li>
              ))
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};
