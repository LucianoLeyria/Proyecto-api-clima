import React, { useState } from "react";
import styled from "styled-components";

const Formulario = styled.form`
  font-size: 20px;
  margin-right: 20px;
`;

const Input1 = styled.input`
  margin: 10px;
  border: 2px solid black;
  padding: 20px;
  font-size: 20px;
`;

const Input2 = styled.input`
  border: 2px solid black;
  padding: 20px;
`;

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <Formulario
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity("");
      }}
    >
      <Input1
        type="text"
        placeholder="Inserte su ciudad"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Input2 type="submit" value="Agregar" />
    </Formulario>
  );
}
