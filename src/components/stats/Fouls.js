import React,{useEffect,useState,useContext} from 'react';
import { CategoryContext } from "../../context/categoryContext";
import Item from '../service/Item';
import {v4 as uuidv4 } from 'uuid';

function Fouls({totalFouls,avgFouls}) {
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
  let viewingStat = totalFouls;
  if(orderBy === 'total') { viewingStat= totalFouls};
  if(orderBy === 'average') { viewingStat= avgFouls};
  let TopTenList= viewingStat.ranks.slice(0,10);
  let list = TopTenList.map((item,index)=> <Item key={uuidv4()} index={index} info={item}/>)





  useEffect(() => {

  }, []);
 return <div className="stat_container">
  <ul className="stat-items">{list}</ul>
      </div>;
}


export default Fouls;
