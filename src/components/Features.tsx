import { Canvas } from "@react-three/fiber";
import StudioLights from "./three/StudioLights";
import { features, featureSequence } from "../constants";
import clsx from "clsx";
import { Suspense, useEffect, useRef } from "react";
import { Html } from "@react-three/drei";
import MacbookModel from "./models/Macbook";
import { useMediaQuery } from "react-responsive";
import useMacbookStore from "../store";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Group } from "three";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FeatureSequenceItem {
  videoPath: string;
  boxClass: string;
  delay: number;
}

const ModelScroll = () => {
  const groupRef = useRef<Group>(null);
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const { setTexture } = useMacbookStore();

  useEffect(() => {
    featureSequence.forEach((feature: FeatureSequenceItem) => {
      const video = document.createElement("video");

      Object.assign(video, {
        src: feature.videoPath,
        muted: true,
        playsInline: true,
        preload: "auto",
        crossOrigin: "anonymous",
      } as HTMLVideoElement);

      video.load();
    });
  }, []);

  useGSAP(() => {
    const modelTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });

    if (groupRef.current) {
      modelTimeline.to(groupRef.current.rotation, {
        y: Math.PI * 2,
        ease: "power1.inOut",
      });
    }

    timeline
      .call(() => setTexture("/videos/feature-1.mp4"))
      .to(".box1", { opacity: 1, y: 0, delay: 1 })

      .call(() => setTexture("/videos/feature-2.mp4"))
      .to(".box2", { opacity: 1, y: 0 })

      .call(() => setTexture("/videos/feature-3.mp4"))
      .to(".box3", { opacity: 1, y: 0 })

      .call(() => setTexture("/videos/feature-4.mp4"))
      .to(".box4", { opacity: 1, y: 0 })

      .call(() => setTexture("/videos/feature-5.mp4"))
      .to(".box5", { opacity: 1, y: 0 });
  }, []);

  return (
    <group ref={groupRef}>
      <Suspense
        fallback={
          <Html>
            <h1 className="text-white text-3xl uppercase">Loading...</h1>
          </Html>
        }
      >
        <MacbookModel scale={isMobile ? 0.05 : 0.08} position={[0, -1, 0]} />
      </Suspense>
    </group>
  );
};

const Features = () => {
  return (
    <section id="features" className="relative min-h-screen">
      <h2 className="text-center mb-10">See it all in a new light.</h2>

      <Canvas id="f-canvas" className="relative z-0 h-[80vh]">
        <StudioLights />
        <ambientLight intensity={0.5} />
        <ModelScroll />
      </Canvas>

      <div className="absolute inset-0 pointer-events-none">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={clsx(
              "box",
              `box${index + 1}`,
              feature.styles,
              "pointer-events-auto absolute transition-all duration-500"
            )}
          >
            <img src={feature.icon} alt={feature.highlight} className="mb-2" />
            <p className="max-w-xs">
              <span className="text-white font-semibold">
                {feature.highlight}
              </span>
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
