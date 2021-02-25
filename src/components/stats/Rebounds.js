import React,{useEffect,useState} from 'react';
import Item from '../service/Item';


function Rebounds({avgRebs}) {
  const[orderBy,setOrderBy] = useState('average');
  let currentStat = avgRebs ;
  let TopTenList= currentStat.ranks.slice(0,10);
  let list = TopTenList.map(item=> <Item  info={item}/>)


  useEffect(() => {
console.log(avgRebs);
  }, []);

  return <div className="minutes_container">
<ul className="list-item-container">{list}</ul>
    </div>;
}


export default Rebounds;
