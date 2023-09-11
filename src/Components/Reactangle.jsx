import React from "react";

const Reactangle = (Props) => {
  let styles = {
    height: "300px",
    width: "300px",
    backgroundColor: `${Props.bg}`,
    color: "white",
  };

  console.log(Props.text);

  return (
    <div>
      <div
        style={{
          height: "300px",
          width: "300px",
          backgroundColor: `${Props.bg}`,
          color: "white",
        }}
      >
        {Props.text}
      </div>
      <h1 style={{ fontFamily: "sans-serif" }}>hello im h1</h1>
    </div>
  );
};

export default Reactangle;
