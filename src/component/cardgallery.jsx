import React, { useState } from "react";
import Card from "../component/card";
import styled from "styled-components";

const Cardgallery = (card) => {
  console.log(card);
  return (
    <Wrapper>
      {Object.values(card).map((card, index) => {
        return <Card key={card.id} {...card} />;
      })}
    </Wrapper>
  );
};

export default Cardgallery;

const Wrapper = styled.div`
  width: 100vw;
  background: linear-gradient(to right, #f650a0, #ff9897);
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;
