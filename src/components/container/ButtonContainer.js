import React,{useEffect, useContext,useState} from 'react';
import { CategoryContext } from "../../context/categoryContext";



function ButtonContainer(){
  const [data, setData,
    headshotData,setheadshotData,
   minutes, setMinutes,
   points,setPoints,
   rebounds,setRebounds,
   assists,setAssists,
 steals,setSteals,
blocks,setBlocks,
threes,setThrees,
fouls,setFouls,
turnovers,setTurnovers,
techfoul,setTechFoul,
foulouts,setFoulOuts,
currentStat,setCurrentStat,
orderBy,setOrderBy] = useContext(CategoryContext);


  return <div className="button-container">
    <button
      disabled={orderBy==="total"}
      onClick={()=>setOrderBy('total')}>Total</button>
      <button
        disabled={orderBy==="average"}
        onClick={()=>setOrderBy('average')}>Averages</button>
  {currentStat == 'threes' &&  <button disabled={orderBy==="percentage"} onClick={()=>setOrderBy('percentage')}>Percentages</button>}
    </div>
}


export default ButtonContainer
