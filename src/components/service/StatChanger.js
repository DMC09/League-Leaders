import React,{useEffect,useContext} from "react";
import { CategoryContext } from "../../context/categoryContext";

function StatChanger() {

  const[data, setData,
   minutes, setMinutes,
   points,setPoints,
   rebounds,setRebounds,
   assists,setAssists,
 steals,setSteals,
blocks,setBlocks,
threes,setThrees,
misc,setMisc,
currentStat,setCurrentStat] = useContext(CategoryContext)


  function handleClick(e) {
    e.preventDefault();
    setCurrentStat(e.target.value)
  }

  return <div className="state_changer-container">

    <button className="stat_change-btn" value="minutes" onClick={handleClick}>minutes</button>
    <button className="stat_change-btn" value="points" onClick={handleClick}>points</button>
    <button className="stat_change-btn" value="rebounds" onClick={handleClick}>rebounds</button>
    <button className="stat_change-btn" value="assists" onClick={handleClick}>assists</button>
    <button className="stat_change-btn" value="steals" onClick={handleClick}>steals</button>
    <button className="stat_change-btn" value="blocks" onClick={handleClick}>blocks</button>
    <button className="stat_change-btn" value="threes" onClick={handleClick}>threes</button>
    {/*





      <button value="misc" onClick={handleClick}>Misc</button>
      */}

  </div>
  ;
}


export default StatChanger;
