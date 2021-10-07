import React from "react";
import { useSpring, animated } from "react-spring";

export default function BannerComponent() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return (
    <animated.div style={props}>
      <img src="../asset/3560685.jpg" alt="banner" width="100%"></img>
    </animated.div>
  );
}
