
import React,{useContext,useEffect,useState} from 'react';
import { CategoryContext } from "../../context/categoryContext";


function Item({info}) {
  var persoId;
  const [pID,setpId] = useState ()
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
      setpId(item.personId);
  });

}

useEffect(() => {
  getPersoID(info.player.first_name,info.player.last_name)
}, [info]);





  return  <div>
    <li>{info.rank}. {info.player.full_name} === {info.score}  and he plays for the {info.teams[0].market} {info.teams[0].name}  ({info.player.jersey_number} {info.player.primary_position} ) </li>
    <img src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${pID}.png`}/>
  </div>;
}

export default Item;
