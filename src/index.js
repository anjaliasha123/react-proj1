import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <label class="label">Enter name:</label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "red" }}>Submit</button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
