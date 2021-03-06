import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards.jsx";
import About from "./components/About.jsx";
import Ciudad from "./components/Ciudad.jsx";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

const Info = styled.h1`
  color: yellow;
  font-size: 30px;
  margin-top: 20px;
`;



const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));

  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities((oldCities) => [...oldCities, ciudad]);
          console.log("PEPE", cities)
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.find((c) => c.id === parseInt(ciudadId));
    return ciudad;
  }
  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Info>
        Esta app fue creada en un ejercicio de tarea que nos dieron en el
        bootcamp de SoyHenry. Una vez encontrada la ciudad que buscó, clickear en el nombre de dicha ciudad para más info
      </Info>
      <Switch>
        <Route exact path="/">
          <Cards cities={cities} onClose={onClose} />
        </Route>

        <Route path="/about">
          <About />
        </Route>
        <Route
          path="/ciudad/:id"
          render={({ match }) => <Ciudad city={onFilter(match.params.id)} />}
        ></Route>
      </Switch>
      <hr />
    </div>
  );
}

export default App;