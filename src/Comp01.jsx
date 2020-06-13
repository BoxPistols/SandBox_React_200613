import React from "react";

export default function Comp01() {
  const on = () => {
    alert("Action!");
  };

  return (
    <>
      <p onClick={on}>Comp01</p>
    </>
  );
}
