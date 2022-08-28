import React from "react";
import Vh100 from "./Vh100";
import "./App.scss";

function App() {
  const [isPrePage, setIsPrePage] = React.useState<boolean>(true);

  return (
    <>
      {isPrePage ? (
        <div
          style={{
            backgroundColor: "greenyellow",
            height: "120vh",
            paddingTop: "60vh",
          }}
        >
          <button
            onClick={() => {
              setIsPrePage(false);
            }}
          >
            Go to page 100vh
          </button>
        </div>
      ) : (
        <Vh100 setIsPrePage={setIsPrePage} />
      )}
    </>
  );
}

export default App;
