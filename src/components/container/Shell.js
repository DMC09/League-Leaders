import React,{useEffect, useContext} from "react";
import StatChanger from '../service/StatChanger';
import Assists from '../stats/Assists';
import Blocks from '../stats/Blocks';
import Minutes from '../stats/Minutes';
import Points from '../stats/Points';
import Rebounds from '../stats/Rebounds';
import Steals from '../stats/Steals';
import Threes from '../stats/Threes';
import Fouls from '../stats/Fouls';
import Turnovers from '../stats/Turnovers';
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
fouls,setFouls,
turnovers,setTurnovers,
techfoulouts,setTechFoulOuts,
currentStat,setCurrentStat] = useContext(CategoryContext);
const [totalMins,avgMins] = minutes;
const [totalPts,avgPts] = points;
const [totalRebs,avgRebs] = rebounds;
const [totalAsts,avgAsts] = assists;
const [totalStls,avgStls] = steals;
const [totalBlks,avgBlks] = blocks;
const [totalTreys,avgTreys,pctTrys] = threes;
const [totalFouls,avgFouls] = fouls;
const [totalTurnovers,avgTurnovers] = turnovers;


  useEffect(() => {

  }, []);


  return <div className="main_container">

       <StatChanger />
        {currentStat === 'minutes' &&  <Minutes totalMins={totalMins} avgMins={avgMins} /> }
        {currentStat === 'points' && <Points totalPts={totalPts} avgPts={avgPts} /> }
        {currentStat === 'rebounds' && <Rebounds  avgRebs={avgRebs} totalRebs={totalRebs} /> }
        {currentStat === 'assists' && <Assists totalAsts={totalAsts} avgAsts={avgAsts} /> }
        {currentStat === 'steals' && <Steals totalStls={totalStls} avgStls={avgStls} /> }
        {currentStat === 'blocks' && <Blocks totalBlks={totalBlks} avgBlks={avgBlks}/> }
        {currentStat === 'threes' && <Threes totalTreys={totalTreys} avgTreys={avgTreys}  pctTrys={pctTrys} /> }
        {currentStat === 'fouls' && <Fouls totalFouls={totalFouls} avgFouls={avgFouls}  /> }
        {currentStat === 'turnovers' && <Turnovers totalTurnovers={totalTurnovers} avgTurnovers={avgTurnovers}  /> }


  </div>;
}


export default Shell;
