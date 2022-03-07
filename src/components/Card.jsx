import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Contenedor = styled.div`
  width: 350px;
  border-radius: 15px;
  background-color: lightblue;
  margin: 20px;
  decoration: none;
  border: 3px solid black;
  background-image: url("https://p4.wallpaperbetter.com/wallpaper/1013/709/202/sunny-bright-day-hd-wallpaper-preview.jpg");
`;

const Buttondiv = styled.div`
  float: right;
  color: black;
  margin: 10px;
  cursor: pointer;
  &:hover {
    color: white;
    border: 3px solid black;
  }
`;

const ContenedorCard = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  font-size: 25px;
`;

const Titulo = styled.h3`
  color: black;
  font-size: 40px;
  margin-top: 20px;
`;

const TextMax = styled.div`
  color: red;
  font-weight: bold;
  margin: 15px;
`;

const TextMin = styled.div`
  color: blue;
  font-weight: bold;
  margin: 15px;
`;

const Imagen = styled.img``;

export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <Contenedor>
      <Buttondiv>
        <button onClick={onClose} className="btn btn-sm btn-danger">
          X
        </button>
      </Buttondiv>
      <Link to={`/ciudad/${id}`}>
        <Titulo>{name}</Titulo>
      </Link>
      <ContenedorCard>
        <TextMin>
          <p>Min</p>
          <p>{min}°</p>
        </TextMin>
        <TextMax>
          <p>Max</p>
          <p>{max}°</p>
        </TextMax>
        <div className="col-sm-4 col-md-4 col-lg-4">
          <Imagen
            className="iconoClima"
            src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
            width="80"
            height="80"
            alt=""
          />
        </div>
      </ContenedorCard>
    </Contenedor>
  );
}
