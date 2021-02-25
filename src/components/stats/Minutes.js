import React,{useEffect,useState} from 'react';
import Item from '../service/Item';


function Minutes({totalMins,avgMins}) {
  const[orderBy,setOrderBy] = useState('average');
  let currentStat = null;
  orderBy === 'total' ? currentStat = totalMins : currentStat = avgMins;
  let TopTenList= currentStat.ranks.slice(0,10);
  let list = TopTenList.map(item=> <Item key={item.rank} info={item}/>)


useEffect(() => {
console.log(totalMins,'players total minutes data')

}, []);


  return <div className="minutes_container">
{orderBy === 'total' ? <button onClick={()=>setOrderBy('average')}>show averages</button> : <button onClick={()=>setOrderBy('total')}>show total</button>}
<ul className="list-item-container">{list}</ul>
    </div>;
}


export default Minutes;
