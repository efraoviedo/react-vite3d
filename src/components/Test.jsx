import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { styled } from "styled-components";
import Cube from "./Cube";
import Dodecahedro from "./Dodecahedro";

const Section = styled.div`
  height: 50vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200vh;
  width: 100vh;
  scroll-snap-align: center;

  @media only screen and (max-width: 768px) {
    height: 100vh;
    width: 50vh;
    padiing-right: 120;
    padiing-top: 0;
    margin-right: 20;
    margin-top: 0;
  }
`;

const Test = () => {
  return (
    <Section>
      <Container>
        {/* <p>quedamos en el minuto 1:07:54</p> */}
        <Canvas>

          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />

          {/* <mesh> */}
          {/* <dodecahedronGeometry args={[1.7, 0]} /> */}
          {/* <meshStandardMaterial> */}
          {/* <RenderTexture attach="map"> */}
          {/* <PerspectiveCamera makeDefault position={[0, 1, 5]} /> */}
          {/* <color attach="background" args={["red"]} /> */}
          {/* <Text */}
          {/* //  position={[0, 1.7, 0]} */}
          {/* rotation={[Math.PI / 1, 2, 0]}  */}
          {/* ref={textRef} */}
          {/* // fontSize={0.2} */}
          {/* background="yellow" */}
          {/* // color="white" */}
          {/* // > */}
          {/* Efraín */}
          {/* </Text> */}
          {/* </RenderTexture> */}
          {/* </meshStandardMaterial> */}
          {/* </mesh> */}
          <Dodecahedro />
        </Canvas>
      </Container>
    </Section>
  );
};

export default Test;
