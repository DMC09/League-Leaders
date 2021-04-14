import React,{useEffect,useContext,useState} from "react";
import { CategoryContext } from "../../context/categoryContext";
import Logo from '../../Logo.png';


function StatChanger() {
  const[data, setData,
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
  techfoulouts,setTechFoulOuts,
  currentStat,setCurrentStat,
  orderBy,setOrderBy,
] = useContext(CategoryContext)


useEffect(() => {
  return function cleanup() {
        setOrderBy('total')
      };
}, [currentStat]);

  function handleChange(e) {
    e.preventDefault();
    setCurrentStat(e.target.value)
  }

  return <div className="stat_changer-container">

    <img
      className="logo"
      src={Logo}
    />
  <select disabled={data.length !== 0 ? false : true} className="drowndown" onChange={handleChange}>
          <option className="drowndown" >
            {data.length !== 0 ? "Select Stat":"Loading...."}
          </option>
          <option className="drowndown-option" value="minutes">
            Minutes
          </option>
          <option className="drowndown-option" value="points">
            Points
          </option>
          <option className="drowndown-option" value="assists">
            Assists
          </option>
          <option className="drowndown-option" value="rebounds">
            Rebounds
          </option>
          <option className="drowndown-option" value="steals">
            Steals
          </option>
          <option className="drowndown-option" value="blocks">
            Blocks
          </option>
          <option className="drowndown-option" value="threes">
            Threes
          </option>
          <option className="drowndown-option" value="fouls">
            Fouls
          </option>
      {  /*<option className="drowndown-option" value="turnovers">
          Turnovers
        </option>
        <option className="drowndown-option" value="technicals">
          Technicals
        </option>
        <option className="drowndown-option" value="foul outs">
          Foul Outs
        </option> */}
        </select>



      {currentStat !== null  &&  <div className="button-container">
        <button disabled={orderBy==="total"} onClick={()=>setOrderBy('total')}>Total</button>
          <button disabled={orderBy==="average"} onClick={()=>setOrderBy('average')}>Averages</button>
      {currentStat == 'threes' &&  <button disabled={orderBy==="percentage"} onClick={()=>setOrderBy('percentage')}>Percentages</button>}
        </div> }
  </div>
  ;
}


export default StatChanger;
