import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { styled } from "styled-components";

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
  // padding-top: 100px;

  @media only screen and (max-width: 768px) {
    // display: flex;
    // justify-content: center;
    // height: 90vh;
    // width: 50vh;
    // padiing-right: 120;
    // padiing-top: 10;
    // margin-right: 20;
    display: none;
  }
`;

const Octaedrohexagonal = () => {
  // export default function Octaedrohexagonal () {

  return (
    <Section>
      <Container>
        <Canvas
          style={{ width: "830px", height: "400px", backgroundColor: "black" }}
        >
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={0.3} />
          <directionalLight position={[3, 2, 1]} />

          <mesh>
            {/* <octahedronGeometry radius={15} detail={2} position={[10, 10, 10]} angle={0.15} penumbra={9} castShadow   border= {16} detail={2} /> */}
            <ringGeometry
              args={[1.1, 3.7, 6, 10]}
              innerRadius={16.82}
              outerRadius={10.382}
              thetaSegments={7}
              phiSegments={5}
              thetaStart={6.28}
              thetaLenght={6.28}
            />
            <meshStandardMaterial>
              <RenderTexture attach="map">
                <PerspectiveCamera makeDefault position={[3.8, 0.1, 9]} />
                <color attach="background" args={["violet"]} />
                <Text
                  //  position={[0, 1.7, 0]}
                  rotation={[Math.PI / 1, 8, 3]}
                  // ref={textRef}
                  fontSize={0.5}
                  // background="green"
                  // color="black"
                >
                  Efraín Oviedo Torres
                </Text>
              </RenderTexture>
            </meshStandardMaterial>
          </mesh>
          {/* <Dodecahedro /> */}
        </Canvas>
      </Container>
    </Section>
  );
};

export default Octaedrohexagonal;
