import React from "react";
import { Link } from "react-router-dom";
import CardWidget from "../CardWidget/CardWidget"; 
import "./navbar.scss";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <Link to="/">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freepnglogos.com%2Fuploads%2Fclassic-samsung-logo-png-0.png&f=1&nofb=1&ipt=fcf64f339a6b825b6f65d7f2d72801cb682d3dad1bffb8f92aee99fb65e1ffac&ipo=images"
            alt="Logo de Samsung"
          />
        </Link>
      </div>
      <ul className="categorias">
        <li><Link to="/category/Telefonos">Telefonos</Link></li>
        <li><Link to="/category/TV & Audio">TV & Audio</Link></li>
        <li><Link to="/category/Computacion">Computación</Link></li>
        <li><Link to="/category/Electrodomesticos">Electrodomésticos</Link></li>
      </ul>
      <CardWidget /> 
    </nav>
  );
};

export default NavBar;
