import React from "react";
import Card from "./Card.jsx";
import styled from "styled-components";

const CardsR = styled.div`
  display: flex;
  justify-content: center;
`;
export default function Cards({ cities, onClose }) {
  return (
    <CardsR>
      {cities.map((c) => (
        <Card
          id={c.id}
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
        />
      ))}
    </CardsR>
  );
}
