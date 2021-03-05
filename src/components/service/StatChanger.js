import React,{useEffect,useContext} from "react";
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
misc,setMisc,
currentStat,setCurrentStat] = useContext(CategoryContext)


  function handleClick(e) {
    e.preventDefault();
    setCurrentStat(e.target.value)
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
          <option className="drowndown-option" value="turnovers">
            Turnovers
          </option>
          <option className="drowndown-option" value="techfoulouts">
            Technical Fouls/Foul Outs
          </option>
        </select>
    {/*





      <button value="misc" onClick={handleClick}>Misc</button>
      */}

  </div>
  ;
}


export default StatChanger;
