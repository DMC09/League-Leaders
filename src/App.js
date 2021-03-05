// IMPORT STATEMENTS
import "./App.css";
import React, { useState, useContext, useEffect } from "react";
import Shell from './components/container/Shell';
import { CategoryContext } from "./context/categoryContext";
import axios from "axios";
//API Links
const backEndAPI = `https://league-leaders-api.herokuapp.com`;
const headShotAPI = `https://league-leaders-api.herokuapp.com/headshot`;


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
fouls,setFouls,
turnovers,setTurnovers,
techfoulouts,setTechFoulOuts,
currentStat,setCurrentStat,
headshotData,setheadshotData
] = useContext(CategoryContext);


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

    setMinutes(filterForMinutes);
    setPoints(filterForPoints);
    setRebounds(filterForRebounds);
    setAssists(filterForAssists);
    setSteals(filterForSteals);
    setBlocks(filterForBlocks)
    setThrees([...filterForMadeThress,...filterForThreePCT]);
    setTurnovers(filterForTurnovers);
    setFouls(filterForPersoFouls);
    setTechFoulOuts([...filterForTechFouls,...filterForFoulOuts])
  }, [data]);


  useEffect(() => {
    getHeadshotData();
    getData();

    console.log('getting the data ');
  }, []);


  async function getData() {
    try {
      const response = await axios.get(backEndAPI);
      await setData(response.data.data.categories);
    } catch (error) {
      console.error(error);
    }
  }
  async function getHeadshotData() {
    try {
      const response = await axios.get(headShotAPI);
      await setheadshotData(response.data.data.league.standard);
    } catch (error) {
      console.error(error);
    }
  }
  return <div className="App">

<Shell />
  </div>;
};

export default App;
