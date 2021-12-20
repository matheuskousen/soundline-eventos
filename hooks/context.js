import React, { useContext, useRef, useEffect, Children } from "react";
import { TweenMax, Expo } from "gsap/dist/gsap";

const AnimationProvider = ({ children }) => {
  // Animation all links
  const Link1 = useRef(null);
  const Link2 = useRef(null);
  const Link3 = useRef(null);
  const Link4 = useRef(null);
  const Link5 = useRef(null);

  const links = [Link1, Link2, Link3, Link4, Link5];
  useEffect(() => {
    // nav animation

    links.forEach((element, i) => {
      TweenMax.staggerFrom(
        element.current,
        1,
        {
          delay: 0.2 * i,
          y: 3,

          opacity: 0,
          ease: Expo.easeInOut,
        },
        0.1
      );
    });
  }, []);

  return (
    <div Link1={Link1} Link2={Link2} Link3={Link3} Link4={Link4} Link5={Link5}>
      {children}
    </div>
  );
};

export default AnimationProvider;
