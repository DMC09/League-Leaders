import React,{useEffect,useState} from 'react';
import Item from '../service/Item';
import {v4 as uuidv4 } from 'uuid';


function Steals({totalStls,avgStls}) {


  let currentStat =totalStls;


  let TopTenList= currentStat.ranks.slice(0,10);
  let list = TopTenList.map((item,index)=> <Item key={uuidv4()} index={index} info={item}/>)


  useEffect(() => {

  }, []);
  return <div className="stat_container">

   <ul className="stat-items">{list}</ul>
       </div>;
}


export default Steals;
