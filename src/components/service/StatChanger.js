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

    <button value="minutes" onClick={handleClick}>minutes</button>
    <button value="points" onClick={handleClick}>points</button>
    <button value="rebounds" onClick={handleClick}>rebounds</button>
    <button value="assists" onClick={handleClick}>assists</button>
    <button value="steals" onClick={handleClick}>steals</button>
    <button value="blocks" onClick={handleClick}>blocks</button>
    <button value="threes" onClick={handleClick}>threes</button>
    {/*





      <button value="misc" onClick={handleClick}>Misc</button>
      */}

  </div>
  ;
}


export default StatChanger;
