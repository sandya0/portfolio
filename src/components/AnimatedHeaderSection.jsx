import React, { useRef } from "react";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AnimatedHeaderSection = ({
  subTitle,
  title,
  text,
  textColor,
  withScrollTrigger = false }) => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: withScrollTrigger ? {
        trigger: contextRef.current,
      }
        : undefined,
    });
    tl.from(contextRef.current, {
      y: "50vh",
      duration: 1,
      ease: "circ.out",
    });
    tl.from(
      headerRef.current,
      {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "circ.out",
      },
      "<0.2"
    );
  }, []);

  return (
    <div ref={contextRef}>
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)",
        }}
      >
        <div
          ref={headerRef}
          className="flex flex-col justify-center gap-12 pt-16 sm:gap-16"
        >
          <p
            className={`text-sm font-light tracking-[0.5rem] uppercase px-10 ${textColor}`}
          >
            {subTitle}
          </p>
          <div className="px-10">
            <h1
              className={`flex flex-col gap-2 mb-1 uppercase banner-text-responsive
                          text-4xl leading-tight
                          sm:text-5xl
                          md:text-7xl md:leading-snug
                          lg:text-9xl lg:leading-snug ${textColor}`}
            >
              {title}
            </h1>
          </div>
        </div>
      </div>

      <div className={`relative px-10 ${textColor}`}>
        <div className="absolute inset-x-0 border-t-2" />
        <div className="py-12 sm:py-16 text-end">
          <AnimatedTextLines
            text={text}
            className="font-light uppercase value-text-responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeaderSection;
