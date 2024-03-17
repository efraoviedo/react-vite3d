import React, { useState } from "react";
import styled from "styled-components";
import Development from "./Development";
import ProductDesign from "./ProductDesign";
import WebDesign from "./WebDesign";

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    align-items: center;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

   @media only screen and (max-width: 768px) {
   padding: 20px;
   justify-content: center;
   }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 60px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  display: inline-block;

  @media only screen and (max-width: 768px) {
    font-size: 30px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  // &:hover {
    // color: pink; // Cambia el color del texto en hover
    // -webkit-text-stroke: 0px; // Quita el texto de contorno
  // }

  // ::after {
    // content: "${(props) => props.text}";
    // position: absolute;
    // top: 0;
    // left: 0;
    color: pink;
    // width: 0px;
    // overflow: hidden;
    // white-space: nowrap;
    // transition: width 0.5s linear;
  // }

  // &:hover {
    // ::after {
      // animation: moveText 0.5s linear both;

      // @keyframes moveText {
        // to {
          // width: 100%;
        // }
      // }
    // }
  // }

  span {
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    color: violet; /* Colorea el texto por defecto */
    -webkit-text-stroke: 0px; /* Quita el contorno del texto */
  }

  .highlight {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0%;
    background-color: violet;
    transition: width 0.5s ease-in-out;
  }

  &:hover .highlight {
    width: 100%; /* Controla la anchura para la animación */
  }
`;

const Right = styled.div`
  flex: 1;
`;

const Works = () => {
  const [work, setWork] = useState("Web Design");
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem
              key={item}
              onClick={() => setWork(item)}
            >
              <span>{item}</span>
              <div className="highlight"></div>
            </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Web Design" ? (
            <WebDesign />
          ) : work === "Development" ? (
            <Development />
          ) : (
            <ProductDesign />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
