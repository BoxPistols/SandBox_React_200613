import React from "react";
const lists = [
  { id: 1, name: "JavaScript" },
  { id: 2, name: "PHP" },
  { id: 3, name: "Ruby" }
];

class List extends React.Component {
  // num = 0
  constructor(props) {
    super(props);
    this.num = 1;
    this.state = {
      lists: this.lists
    };
  }
  render() {
    return (
      <>
        <ul>
          {lists.map(s => (
            <li>
              {this.num++}: {s.name}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

// class Item extends React.Component {
//   li = {
//     listStyle: "none"
//   };
//   render() {
//     return <li style={this.li}>{this.props.name}</li>;
//   }
// }

export default List;
