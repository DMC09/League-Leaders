
// IMPORT STATEMENTS
import "./App.css";
import React, { useState,useContext, useEffect } from "react";
import { CategoryContext} from './context/categoryContext'
import axios from "axios";

// MAIN VARIABLE DECLARTIONS
const { REACT_APP_KEY } = process.env;
const api = `https://cors-anywhere.herokuapp.com/https://api.sportradar.us/nba/trial/v7/en/seasons/2020/REG/leaders.json?api_key=${REACT_APP_KEY}`;
// COMPONENT
const App = () =>  {
const [data,setData] = useContext(CategoryContext) //Object is not iterable (cannot read


// Meant to run only once after initial render
useEffect(() => {
  getData();
}, []);

async function getData() {
  try {
    const response = await axios.get(api);
    await setData(response.data.categories);
  } catch (error) {
    console.error(error);
  }
}
  return (
      <div className="App">
        <p>hello</p>
        <h2>cheeseCake!</h2>
      </div>
  );
}

export default App;









// const filterForMinutes = mainData.filter(set=> set.name === 'minutes');
// const filterForPoints = mainData.filter(set=> set.name === 'points');
// const filterForRebounds = mainData.filter(set=> set.name === 'rebounds');
// const filterForAssists = mainData.filter(set=> set.name === 'assists');
// const filterForSteals = mainData.filter(set=> set.name === 'steals');
// const filterForBlocks = mainData.filter(set=> set.name === 'blocks');
// const filterForMadeThress = mainData.filter(set=> set.name === 'three_points_made');
// const filterForThreePCT = mainData.filter(set=> set.name === 'three_points_pct');
// const filterForTurnovers = mainData.filter(set=> set.name === 'turnovers');
// const filterForPersoFouls = mainData.filter(set=> set.name === 'personal_fouls');
