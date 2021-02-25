import React,{useEffect,useState} from 'react';
import Item from '../service/Item';
import {v4 as uuidv4 } from 'uuid';



function Rebounds({avgRebs}) {
  const[orderBy,setOrderBy] = useState('average');
  let currentStat = avgRebs ;
  let TopTenList= currentStat.ranks.slice(0,10);
  let list = TopTenList.map((item,index)=> <Item key={uuidv4()} index={index} info={item}/>)


  useEffect(() => {
console.log(avgRebs);
  }, []);

  return <div className="minutes_container">
<ul className="list-item-container">{list}</ul>
    </div>;
}


export default Rebounds;
