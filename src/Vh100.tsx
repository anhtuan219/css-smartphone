import React from "react";
import { debounce } from "lodash";
interface IProps {
  setIsPrePage: React.Dispatch<React.SetStateAction<boolean>>;
}

const Vh100 = ({ setIsPrePage }: IProps) => {
  const [vh, setVh] = React.useState<number>(window.innerHeight * 0.01);

  const handleResizeWindowInnerHeight = () => {
    setVh(window.innerHeight * 0.01);
  };

  const debounceHandleResizeWindowInnerHeight = debounce(
    handleResizeWindowInnerHeight,
    200
  );

  React.useEffect(() => {
    window.addEventListener("resize", debounceHandleResizeWindowInnerHeight);
    return () => {
      window.removeEventListener(
        "resize",
        debounceHandleResizeWindowInnerHeight
      );
    };
  }, []);

  return (
    <div
      style={
        {
          position: "relative",
          backgroundColor: "green",
          "--vh": `${vh}px`,
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
