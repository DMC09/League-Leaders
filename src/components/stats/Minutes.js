import React,{useEffect,useState,useContext} from 'react';
import { CategoryContext } from "../../context/categoryContext";
import Item from '../service/Item';
import {v4 as uuidv4 } from 'uuid';



const Minutes = ({totalMins,avgMins})=> {
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
  techfoul,setTechFouls,
  foulouts,setFoulOuts,
  currentStat,setCurrentStat,
  orderBy,setOrderBy,
  ] = useContext(CategoryContext)

  let viewingStat=totalMins;
  if(orderBy === 'total') { viewingStat= totalMins};
  if(orderBy === 'average') { viewingStat= avgMins};
  let TopTwentyList= viewingStat.ranks.slice(0,20);
  let list = TopTwentyList.map((item,index)=> <Item key={uuidv4()} index={index} info={item}/>)


useEffect(() => {


}, []);


  return <div className="stat_container">


<ul className="stat-items">{list}</ul>
    </div>;
}


export default Minutes;
