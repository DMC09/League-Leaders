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
const [totalMins,avgMins] = minutes;
const [totalPts,avgPts] = points;
const [totalRebs,avgRebs] = rebounds;
const [totalAsts,avgAsts] = assists;


  useEffect(() => {

  }, []);


  return <div className="main_container">

      {minutes.length === 0 ?  <span className="skeleton-box" style={{width:"100px",height:"80px"}}></span>: <StatChanger />}

        {currentStat === 'minutes' &&  <Minutes totalMins={totalMins} avgMins={avgMins} /> }
        {currentStat === 'points' && <Points totalPts={totalPts} avgPts={avgPts} /> }
        {currentStat === 'rebounds' && <Rebounds  avgRebs={avgRebs} /> }
        {currentStat === 'assists' && <Assists totalAsts={totalAsts} avgAsts={avgAsts} /> }
        {/*


          {currentStat === 'misc' && <Misc stat={misc} /> }
          {currentStat === 'steals' && <Steals stat={steals} /> }
          {currentStat === 'threes' && <Threes stat={threes} /> }
          {currentStat === 'blocks' && <Blocks stat={blocks} /> }
        */}
        {minutes.length === 0 &&  <span className="skeleton-box" style={{width:"100px",height:"80px"}}></span> }
  </div>;
}


export default Shell;
