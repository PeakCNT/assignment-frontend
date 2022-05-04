import React, { useState } from "react";
import styled from "styled-components";

const Card = ({ id, name, logo, roundSeats, score, faculty, likes }) => {
  return (
    <Cards>
      <img src={logo} alt="" className="logo" />
      <div className="head" style={{ color: "#ff5a5a" }}>
        {faculty.name}
      </div>
      <div className="head">{name}</div>
      <div className="head">{faculty.university.name}</div>
      <div>รอบที่เปิด{roundSeats}</div>
      <div>รอบที่4 : {score === null ? "" : score.scoreType}</div>
      <div>คะแนนของคุณคือ : {score === null ? "" : score.scoreType}</div>
      <div>คะแนนต่ำสุด 62 : {score === null ? "" : score.min}</div>
      <div>คะแนนเฉลี่ย 62 : {score === null ? "" : score.avg}</div>
      <div>คะแนนสูงสุด 62 : {score === null ? "" : score.max}</div>
      <div>{likes} คนที่สนใจ</div>
    </Cards>
  );
};

export default Card;
const Cards = styled.div`
  width: 442px;
  height: 493px;
  background: white;
  margin: 80px;
  padding: 20px;
  border: 3px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;
