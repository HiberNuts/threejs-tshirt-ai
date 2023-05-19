import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import CameraRig from "./CameraRig";
import BackDrop from "./BackDrop";
import Shirt from "./Shirt";

const CanvasModel = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas
        className="w-full max-w-full h-full transition-all ease-in"
        shadows
        gl={{ preserveDrawingBuffer: true }}
        camera={{ position: [0, 0, 0], fov: 45 }}
      >
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
        <CameraRig>
          <Center>
            <BackDrop />
            <Shirt />
          </Center>
        </CameraRig>
      </Canvas>
    </div>
  );
};

export default CanvasModel;
