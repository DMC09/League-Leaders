import React,{useEffect,useState} from 'react';
import Item from '../service/Item';
import {v4 as uuidv4 } from 'uuid';



function Threes({totalTreys,avgTreys,pctTrys}) {

  let viewingStat = totalTreys;
  // orderBy === 'total' ?  currentStat = totalTreys:  currentStat = avgTreys
  // if (orderBy === 'total') currentStat = totalTreys;
  // if (orderBy === 'average') currentStat = avgTreys;
  // if (orderBy === 'percentage') currentStat = pctTrys;

  let TopTenList= viewingStat.ranks.slice(0,10);
  let list = TopTenList.map((item,index)=> <Item key={uuidv4()} index={index} info={item}/>)

  useEffect(() => {
    console.log(totalTreys,avgTreys,pctTrys, 'are the stats here??');
  }, []);






  return <div className="stat_container">






   <ul className="stat-items">{list}</ul>
       </div>;
}


export default Threes;


{/*






  */}
