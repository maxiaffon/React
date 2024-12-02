import CardWidget from "./CardWidget";
import "./navbar.scss";
import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar">

         <div className="brand">
           <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freepnglogos.com%2Fuploads%2Fclassic-samsung-logo-png-0.png&f=1&nofb=1&ipt=fcf64f339a6b825b6f65d7f2d72801cb682d3dad1bffb8f92aee99fb65e1ffac&ipo=images" alt="Logo de Samsumg" />
         </div>
         <ul className="categorias">
            <li>Telefonos</li>
            <li>Electrodomesticos</li>
            <li>TV & Audio</li>
            <li>Computacion</li>
         </ul>

        <CardWidget />
    </nav>

  )
}

export default NavBar