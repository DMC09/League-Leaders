import React,{useEffect,useState,useContext} from 'react';
import { CategoryContext } from "../../context/categoryContext";
import Item from '../service/Item';
import {v4 as uuidv4 } from 'uuid';

function Turnovers({totalTurnovers,avgTurnovers}) {
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

  let viewingStat = totalTurnovers;

  if(orderBy === 'total') { viewingStat= totalTurnovers};
  if(orderBy === 'average') { viewingStat= avgTurnovers};
  let TopTwentyList= viewingStat.ranks.slice(0,20);
  let list = TopTwentyList.map((item,index)=> <Item key={uuidv4()} index={index} info={item}/>)





  useEffect(() => {

  }, []);
 return <div className="stat_container">

  <ul className="stat-items">{list}</ul>
      </div>;
}


export default Turnovers;
