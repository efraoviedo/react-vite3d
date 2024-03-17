import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Dodecahedro = () => {
  const textRef = useRef();
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 0.5)
  );
  return (
    <mesh>
      <dodecahedronGeometry args={[1.1, 0]} />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 1, 5]} />
          <color attach="background" args={["red"]} />
          <Text
            ref={textRef}
            position={[0, 1.1, 0]}
            fontSize={0.2}
            // background="yellow"
            color="white"
            >
            Efraín 
            Oviedo
            Torres
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Dodecahedro;
