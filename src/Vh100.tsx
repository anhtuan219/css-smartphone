import React from "react";

const Vh100 = () => {
  return (
    <div
      style={
        {
          position: "relative",
          backgroundColor: "green",
          "--vh": `${window.innerHeight * 0.01}px`,
        } as React.CSSProperties
      }
      className="container"
    >
      <p>Text start</p>
      <p style={{ position: "absolute", bottom: 0, backgroundColor: "yellow" }}>
        Text end
      </p>
    </div>
  );
};

export default Vh100;
