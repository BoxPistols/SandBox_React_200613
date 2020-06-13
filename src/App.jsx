import React from "react";
import "./styles.sass";
import Comp01 from "./Comp01";
import Hello from "./Hello";
import List from "./List";

export default function App() {
  const hg = "hoge";
  const mgSty = {
    color: "skyblue"
  };

  /*
   * Create funßction
   * var name = function(prop1, prop2) {
   *   var name = { xxx prop2}
   * retun html{name/prop1}
   * }
   */
  const printFn = function(msg, color) {
    const styl = {};
    return <p style={styl}>{msg}</p>;
  };

  let dataVal = [<li>list1</li>, <li>list2</li>];

  // Array
  let users = [
    { name: "Tommy", id: 22 },
    { name: "Bob", id: 11 },
    { name: "James", id: 4 }
  ];
  //let counter = 0

  return (
    <div className="App">
      <h1 style={mgSty}>Hello CodeSandbox</h1>
      <List />
      <Hello name="Helloクラスから引き継いだ値" />
      <Comp01 />
      <p>{printFn("おれええええ", "red")}</p>
      <p>{hg}</p>
      <h2>Start editing to see some magic happen!</h2>
      <ul>{dataVal}</ul>
      <table>
        <tr>
          <td>Name</td>
          <td>ID</td>
        </tr>
        {users.map(u => [
          <tr>
            <td>{"Nam" + u.name}</td>
            <td>{`id: ${u.id}`}</td>
          </tr>
        ])}
      </table>
    </div>
  );
}
