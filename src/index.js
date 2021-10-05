import React from "react";
import ReactDOM from "react-dom";

function getButtonText(){
  return "Click Me!";
}
const App = () => {
  return (
    <div>
      <label class="label">Enter name:</label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "red" }}>{getButtonText()}</button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
