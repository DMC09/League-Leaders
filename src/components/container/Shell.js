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
    console.log(currentStat,'Current Stat through context')
  }, []);


  return <div className="main_container">
    <h3>{currentStat}</h3>
      <StatChanger />
        {currentStat === 'minutes' &&  <Minutes /> }
        {currentStat === 'points' && <Points /> }
        {currentStat === 'rebounds' && <Rebounds /> }
        {currentStat === 'assists' && <Assists /> }
        {currentStat === 'misc' && <Misc /> }
        {currentStat === 'steals' && <Steals /> }
        {currentStat === 'threes' && <Threes /> }
        {currentStat === 'blocks' && <Blocks /> }
  </div>;
}


export default Shell;




// {stage === 'initial' &&  <InitialForm /> }
//   {stage === 'main' && <MainForm /> }
//   {stage === 'success' && <SuccessPage /> }
//   {stage === 'failure' && <FailurePage /> }
