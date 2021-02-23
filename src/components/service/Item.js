
import React,{useContext,useEffect} from 'react';
import { CategoryContext } from "../../context/categoryContext";
import getHeadshot from './Headshot';

function Item({info}) {
  let persoId;

  const [
    data, setData,
    minutes, setMinutes,
    points,setPoints,
    rebounds,setRebounds,
    assists,setAssists,
    steals,setSteals,
    blocks,setBlocks,
    threes,setThrees,
    misc,setMisc,
    currentStat,setCurrentStat,
    headshotData,setheadshotData] = useContext(CategoryContext);

function getPersoID(firstName,lastName){
headshotData.filter(item=>{
    if(item.firstName == firstName && item.lastName == lastName)
      persoId = item.personId
  });

}

useEffect(() => {
  getPersoID(info.player.first_name,info.player.last_name)
console.log(persoId);
}, []);





  return  <div>
    <li> {persoId}   {info.rank}.{info.score} {info.player.full_name}. {info.player.jersey_number} {info.player.primary_position}{info.teams[0].market} {info.teams[0].name} {persoId}  </li>

    <img src={getHeadshot(info.player.full_name)}/>
  </div>;
}

export default Item;
