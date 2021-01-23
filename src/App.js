import "./App.css";
import { useState } from "react";
import axios from 'axios'

const {REACT_APP_KEY} = process.env
console.log()

function App() {
const test =`https://cors-anywhere.herokuapp.com/https://api.sportradar.us/nba/trial/v5/en/games/2013/12/21/schedule.json?api_key=${REACT_APP_KEY}`
  const api =  "https://api.sportradar.us/nba/trial/v5/en/games/2013/12/21/schedule.json?api_key=${REACT_APP_KEY}";


  const [data, setData] = ('');
console.log(REACT_APP_KEY,'Dis is the key');
axios.get(test).then(res=>console.log(res))
  return (
    <div className="App">
      <p>hello</p>
      <p>{data}</p>
    </div>
  );
}

export default App;
