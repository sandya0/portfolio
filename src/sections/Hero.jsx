import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/planet";
import { Environment, Lightformer, Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const text = "I design and develop user-friendly websites.";

  return (
    <section className="flex flex-col justify-end min-h-screen">
      <AnimatedHeaderSection
        subTitle="404 No Bugs Found"
        title="Sandya Pradayan"
        text={text}
        textColor="text-black"
      />
      <figure
        className="absolute inset-0 -z-50"
        style={{
          width: "100vw",
          height: "100vh",
          background: "url('/path/to/your/image.jpg') no-repeat center center/cover",
        }}
      >
        <Canvas
          shadows
          camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
        >
          <ambientLight intensity={0.5} />
          <Float speed={0.5}>
            <Planet scale={isMobile ? 0.7 : 1} />
          </Float>
          <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer intensity={2} position={[0, 5, -9]} scale={10} />
              <Lightformer intensity={2} position={[0, 3, 1]} scale={10} />
              <Lightformer intensity={2} position={[-5, -1, 1]} scale={10} />
              <Lightformer intensity={2} position={[10, 1, 0]} scale={16} />
            </group>
          </Environment>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
