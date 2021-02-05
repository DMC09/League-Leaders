// IMPORT STATEMENTS
import "./App.css";
import React, { useState, useContext, useEffect } from "react";
import Shell from './components/container/Shell';
import StatChanger from './components/service/StatChanger';
import { CategoryContext } from "./context/categoryContext";
import axios from "axios";

// MAIN VARIABLE DECLARTIONS
const { REACT_APP_KEY } = process.env;
const api = `https://cors-anywhere.herokuapp.com/https://api.sportradar.us/nba/trial/v7/en/seasons/2020/REG/leaders.json?api_key=${REACT_APP_KEY}`;

// COMPONENT
const App = () => {
  const [
    data, setData,
     minutes, setMinutes,
     points,setPoints,
     rebounds,setRebounds,
     assists,setAssists,
   steals,setSteals,
 blocks,setBlocks,
threes,setThrees,
misc,setMisc,
currentStat,setCurrentStat] = useContext(CategoryContext);


  // Meant to run only once after initial render
  useEffect(() => {
    const filterForPoints = data && data.filter((set) => set.name === "points");
    const filterForMinutes = data && data.filter(set=> set.name === 'minutes');
    const filterForRebounds = data && data.filter(set=> set.name === 'rebounds');
    const filterForAssists = data && data.filter(set=> set.name === 'assists');
    const filterForSteals = data && data.filter(set=> set.name === 'steals');
    const filterForBlocks = data && data.filter(set=> set.name === 'blocks');
    const filterForMadeThress = data && data.filter(set=> set.name === 'three_points_made');
    const filterForThreePCT = data && data.filter(set=> set.name === 'three_points_pct');
    const filterForTurnovers = data && data.filter(set=> set.name === 'turnovers');
    const filterForPersoFouls = data && data.filter(set=> set.name === 'personal_fouls');
    const filterForTechFouls = data && data.filter(set=> set.name === 'tech_fouls');
    const filterForFoulOuts = data && data.filter(set=> set.name === 'foulouts');

    getData();
    setMinutes(filterForMinutes);
    setPoints(filterForPoints);
    setRebounds(filterForRebounds);
    setAssists(filterForAssists);
    setSteals(filterForSteals);
    setBlocks(filterForBlocks)
    setThrees([...filterForMadeThress,...filterForThreePCT]);
    setMisc([...filterForTurnovers,...filterForPersoFouls,...filterForTechFouls,...filterForFoulOuts])
  }, [data]);
  useEffect(() => {

    console.log(currentStat,'current state through App')

  }, []);


  async function getData() {
    try {
      const response = await axios.get(api);
      await setData(response.data.categories);
    } catch (error) {
      console.error(error);
    }
  }

  return <div className="App">
<h1>League Leaders App</h1>
<Shell />
  </div>;
};

export default App;
