import React from "react";
// import { useParams } from "react-router-dom";
import styled from "styled-components";

const ContenedorInfo = styled.div`
  font-size: 30px;
`;

function Ciudad({ city }) {
  // let { id } = useParams();

  if (!city) return <h3>Ciudad inexistente</h3>;
  return (
    <div className="ciudad">
      <ContenedorInfo>
        <h2>{city.name}</h2>
        <div className="info">
          <div>Temperatura: {city.temp} ºC</div>
          <div>Clima: {city.weather}</div>
          <div>Viento: {city.wind} km/h</div>
          <div>Cantidad de nubes: {city.clouds}</div>
          <div>Latitud: {city.latitud}º</div>
          <div>Longitud: {city.longitud}º</div>
        </div>
      </ContenedorInfo>
    </div>
  );
}

export default Ciudad;
