import React from "react";

const msg = {
  color: "yellow"
};
class Hello extends React.Component {
  constructor(props) {
    super(props);
    // for name view
    this.name = props.name;
    // for count Up State
    this.state = {
      counter: 0, // reset
      stateMsg: "Count Start!",
      flg: true
    // for count Up
    this.state = {
      counter: 0, // reset
      stateMsg: "this.stateのメッセージ"
    };
    // function to bind(this)
    this.doAction = this.doAction.bind(this);
  }
  // Functoin event { setState object: action }
  doAction(event) {
    this.setState(state => ({
      counter: state.counter + 1,                   
      stateMsg: "Count: " + state.counter,
      flg: !state.flg
    }));
  }
  render() {
    return (
      <>
        {this.state.flg ? <p>toggle: true</p> : <p>toggle: false</p>}
        <p style={msg}>{this.props.name}</p>
        <p>{this.state.stateMsg}</p>
        {/* <p>{this.state.counter}</p> */}
        <button onClick={this.doAction}>button</button>
      </>
    );
  }
}

export default Hello;
