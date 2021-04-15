import React,{useEffect,useState,useContext} from 'react';
import { CategoryContext } from "../../context/categoryContext";
import Item from '../service/Item';
import {v4 as uuidv4 } from 'uuid';
import Fade from 'react-reveal/Fade';

function Assists({totalAsts,avgAsts}) {
  const [showLoader,setLoader] = useState(true)
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
  techfoul,setTechFoul,
  foulouts,setFoulOuts,
  currentStat,setCurrentStat,
  orderBy,setOrderBy,
  ] = useContext(CategoryContext)



  let viewingStat;
  if(orderBy === 'total') { viewingStat= totalAsts};
  if(orderBy === 'average') { viewingStat= avgAsts};

  let TopTwentyList= viewingStat.ranks.slice(0,20);
  let list = TopTwentyList.map((item,index)=> <Item key={uuidv4()} index={index} info={item}/>)




// template but change to items.
  useEffect(() => {
    console.log(showLoader);
      // use Set Timeout to change show loader to false;
      setTimeout(() => {
    console.log('you can see me after 2 seconds')
    setLoader(false)
    console.log(showLoader);
}, 250);
  }, [showLoader]);
 return <div className="stat_container">

  <ul className="stat-items">{list}</ul>
      </div>;
}


export default Assists;
