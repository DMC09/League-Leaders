import React,{useEffect, useContext} from "react";
import StatChanger from '../service/StatChanger';
import { CategoryContext } from "../../context/categoryContext";



function Shell(props) {
  const [data, setData,
   minutes, setMinutes,
   points,setPoints,
   rebounds,setRebounds,
   assists,setAssists,
 steals,setSteals,
blocks,setBlocks,
threes,setThrees,
misc,setMisc,
currentStat,setCurrentStat] = useContext(CategoryContext);
  useEffect(() => {
    console.log(currentStat,'Current Stat through context')
  }, []);


  return <div className="main_container">
    <h3>{currentStat}</h3>
      <StatChanger />
  </div>;
}


export default Shell;
