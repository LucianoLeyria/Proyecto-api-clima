import React from "react";
import styled from "styled-components";

const CardTitle = styled.div`
  margin: 20px;
  height: 100px;
  background-color: lightblue;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function About() {
  return (
    <CardTitle>
      Esta es una pagina web donde podras buscar cualquier ciudad del mundo y te
      devolverá el clima exacto de dicha ciudad. <br />
      Creada utilizando lenguajes y librerias como html,css, javascript y react.
      Se utilizaron varios componentes para poder construirla y librerias como
      "react-router-dom" y "styled-components"
    </CardTitle>
  );
}

export default About;
