import React from "react";

const msg = {
  color: "yellow"
};
class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
  }
  render() {
    return <p style={msg}>{this.name}</p>;
  }
}

export default Hello;
