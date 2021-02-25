import React,{useEffect,useState} from 'react';
import Item from '../service/Item';


function Rebounds({totalRebs,avgRebs}) {
  const[orderBy,setOrderBy] = useState('average');
  let currentStat ;

  orderBy === 'total' ?  currentStat = totalRebs:  currentStat = avgRebs
  let TopTenList= currentStat.ranks.slice(0,10);
  let list = TopTenList.map(item=> <Item  info={item}/>)


  useEffect(() => {
console.log(totalRebs,avgRebs);
  }, []);

  return <div className="minutes_container">
{orderBy === 'total' ? <button onClick={()=>setOrderBy('average')}>show averages</button> : <button onClick={()=>setOrderBy('total')}>show total</button>}
<ul className="list-item-container">{list}</ul>
    </div>;
}


export default Rebounds;
