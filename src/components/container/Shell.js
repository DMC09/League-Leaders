import React,{useEffect, useContext} from "react";
import StatChanger from '../service/StatChanger';
import Assists from '../stats/Assists';
import Blocks from '../stats/Blocks';
import Minutes from '../stats/Minutes';
import Misc from '../stats/Misc';
import Points from '../stats/Points';
import Rebounds from '../stats/Rebounds';
import Steals from '../stats/Steals';
import Threes from '../stats/Threes';
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

  }, [data]);


  return <div className="main_container">
    <h3>{currentStat}</h3>
    <p>test</p>
      <StatChanger />
        {currentStat === 'minutes' &&  <Minutes stat={minutes} /> }
        {currentStat === 'points' && <Points stat={points} /> }


        {/*
          {currentStat === 'rebounds' && <Rebounds stat={rebounds} /> }
          {currentStat === 'assists' && <Assists stat={assists} /> }
          {currentStat === 'misc' && <Misc stat={misc} /> }
          {currentStat === 'steals' && <Steals stat={steals} /> }
          {currentStat === 'threes' && <Threes stat={threes} /> }
          {currentStat === 'blocks' && <Blocks stat={blocks} /> }
        */}
  </div>;
}


export default Shell;
