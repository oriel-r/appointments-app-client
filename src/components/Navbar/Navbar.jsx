/** @format */

import React from "react";
import Navlink from "./navlink/Navlink";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isLoged = useSelector();
  return (
    <>
      <nav className={styles.bar}>
        <div>
          <Link to="/home">Inicio</Link>
          <Link to="/my-appointments">Mis turnos</Link>
          <Link to="/create-appointment">Sacar turno</Link>
        </div>
        <div className={styles.right_bar}>
          <Link to="/login">Iniciar sesion</Link>
          <Link to="/register">Registrarse</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
