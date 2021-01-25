import "./App.css";
import { useState,useEffect } from "react";
import axios from 'axios'

const {REACT_APP_KEY} = process.env

// const test =`https://cors-anywhere.herokuapp.com/https://api.sportradar.us/nba/trial/v7/en/games/2021/1/23/schedule.json?api_key=${REACT_APP_KEY}`
const api =`https://cors-anywhere.herokuapp.com/https://api.sportradar.us/nba/trial/v7/en/seasons/2020/REG/leaders.json?api_key=${REACT_APP_KEY}`;
function App() {
  useEffect(() => {
    getData()

  });
const [data, setData] = useState('');
console.log(data)
async function getData() {
  try {
    // fetch data from a url endpoint
    const response = await axios.get(api);
// setData(response.data[0])
await setData(response.data.categories)


  } catch (error) {
console.error(error)
  }
}


  return (
    <div className="App">
      <p>hello</p>



    </div>
  );
}

export default App;
