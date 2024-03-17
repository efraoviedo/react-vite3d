import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import Mac from "./Mac";

const Desc = styled.div`
  width: 220px;
  height: 70px;
  padding: 5px;
  background-color: pink;
  border-radius: 10px;
  position: absolute;
  top: 5px;
  right: 50px;

  @media only screen and (max-width: 768px) {
    top: 30px;
    bottom: 0px;
    right: 0;
    margin: auto;
    flex
    font-size: 2px;
  }
`;

const WebDesign = () => {
  return (
    <>
      <Canvas>
        {/* <Suspense fallback={null}> */}
        <Stage environment="city" intensity={0.6}>
          <Mac />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        {/* </Suspense> */}
      </Canvas>
      <Desc>
        We design products with a strong focus on both world class design and
        ensuring your product is a market success.
      </Desc>
    </>
  );
};

export default WebDesign;
