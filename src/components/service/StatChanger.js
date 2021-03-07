import React,{useEffect,useContext,useState} from "react";
import { CategoryContext } from "../../context/categoryContext";
import Logo from '../../Logo.png';

function StatChanger() {

  const[data, setData,
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
  headshotData,setheadshotData,
  orderBy,setOrderBy,
] = useContext(CategoryContext)


useEffect(() => {


  console.log(orderBy,'this is the total!!');
}, []);

  function handleClick(e) {
    e.preventDefault();

  }
  function handleChange(e) {
    e.preventDefault();
    setCurrentStat(e.target.value)
  }

  return <div className="stat_changer-container">

    <img
      className="logo"
      src={Logo}
    />
    <select className="drowndown" onChange={handleChange}>
          <option className="drowndown" >
            Select Stat
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
          <option className="drowndown-option" value="turnovers">
            Turnovers
          </option>
        </select>
      {currentStat !== null  &&  <div className="button-container">
          <button onClick={()=>setOrderBy('total')}>Total</button>
          <button onClick={()=>setOrderBy('average')}>Averages</button>
      {currentStat=='threes' && <h1>These are the Trey fives!</h1>}
        </div> }
  </div>
  ;
}


export default StatChanger;
