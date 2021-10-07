import React from "react";
import { useSpring, animated } from "react-spring";

export default function ProfileComponent() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return (
    <animated.div style={props}>
      <img src="../asset/profile.png" alt="profile" width="100%" />
    </animated.div>
  );
}
