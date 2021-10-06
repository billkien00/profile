import React from "react";

export default function BannerComponent() {
  const position = {
    position: "absolute",
    left: "63%",
    bottom: "-15%",
  };
  return (
    <div>
      <img
        src="../asset/3560685.jpg"
        alt="banner"
        width="100%"
        style={{ position: "relative" }}
      ></img>
    </div>
  );
}
