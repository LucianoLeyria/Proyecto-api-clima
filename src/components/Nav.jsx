import React from "react";
import Logo from "../Imagen/Logo.png";
import SearchBar from "./SearchBar.jsx";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ContenedorGral = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InformacionWeb = styled.span`
  font-size: 30px;
  color: yellow;
`;

const Imagen = styled.img`
  display: flex;
  margin-left: 100px;
  width: 150px;
  height: 150px;
`;

const Span = styled.span`
  float: right;
  display: flex;
  font-size: 30px;
  color: yellow;
  justify-content: center;
`;

function Nav({ onSearch }) {
  return (
    <ContenedorGral>
      <nav className="navbar">
        <Link to="/about">
          <InformacionWeb>Informacion de la web</InformacionWeb>
        </Link>
        <SearchBar onSearch={onSearch} />
      </nav>
      <Link to="/">
        <Span>Go to HOME</Span>
        <Imagen
          id="logoHenry"
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
      </Link>
    </ContenedorGral>
  );
}

export default Nav;
