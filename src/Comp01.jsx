import React from "react";

const msg = {
  fontSize: "2rem",
  color: "teal"
};
// functional Component
function Welcome(props) {
  return <p style={msg}>Welcome,{props.name}</p>;
}

function Calc(props) {
  let total = 0;
  for (let i = 0; i <= props.number; i++) {
    total += i;
  }
  return (
    <p>
      1から{props.number}までの合計は{total}です
    </p>
  );
}

export default function Comp01() {
  const on = () => {
    alert("Action!");
  };

  return (
    <>
      <Calc number="3" />
      <Calc number="4" />
      <Welcome name="Taro" />
      <p onClick={on}>Comp01</p>
    </>
  );
}
