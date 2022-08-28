import React from "react";

interface IProps {
  setIsPrePage: React.Dispatch<React.SetStateAction<boolean>>;
}

const Vh100 = ({ setIsPrePage }: IProps) => {
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
      <button
        onClick={() => {
          setIsPrePage(true);
        }}
      >
        Go to pre page
      </button>
      <p style={{ position: "absolute", bottom: 0, backgroundColor: "yellow" }}>
        Text end
      </p>
    </div>
  );
};

export default Vh100;
