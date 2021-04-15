import React,{useEffect, useContext,useState} from 'react';
import { CategoryContext } from "../../context/categoryContext";



function ButtonContainer(){

  const mainStats=
  ["minutes",
  "points",
  "assists",
  "rebounds",
  "steals",
  "blocks",
  "threes",
  "turnovers"
];

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
  techfoul,setTechFouls,
  foulouts,setFoulOuts,
  currentStat,setCurrentStat,
orderBy,setOrderBy] = useContext(CategoryContext);


  return <div className="button-container">

          {mainStats.includes(currentStat) ?
            <>
            <button
              disabled={orderBy==="total"}
              onClick={()=>setOrderBy('total')}>Total</button>
            <button
              disabled={orderBy==="average"}
              onClick={()=>setOrderBy('average')}>Averages</button> </>: console.log('it doesnt contain block')
            }

            {currentStat == 'threes' &&  <button disabled={orderBy==="percentage"} onClick={()=>setOrderBy('percentage')}>Percentages</button>}
            
          {currentStat == 'fouls' &&  <button disabled={orderBy==="average"} onClick={()=>setOrderBy('percentage')}>Averages</button>
          }
  </div>
}


export default ButtonContainer
