import "./App.css";
import { useState } from "react";

const {REACT_APP_KEY} = process.env

function App() {
  const api = "";
  const [data, setData] = ('');
console.log(REACT_APP_KEY,'Dis is the key');
  return (
    <div className="App">
      <p>hello</p>
      <p>{data}</p>
    </div>
  );
}

export default App;
