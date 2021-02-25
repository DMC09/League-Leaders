import React,{useEffect,useState} from 'react';
import Item from '../service/Item';


function Blocks({totalBlks,avgBlks}) {
  const[orderBy,setOrderBy] = useState('average');
  let currentStat ;
  orderBy === 'total' ?  currentStat = totalBlks:  currentStat = avgBlks

  let TopTenList= currentStat.ranks.slice(0,10);
  let list = TopTenList.map(item=> <Item key={item.rank} info={item}/>)


  useEffect(() => {

  }, []);
  return <div className="minutes_container">
   {orderBy === 'total' ? <button onClick={()=>setOrderBy('average')}>show averages</button> : <button onClick={()=>setOrderBy('total')}>show total</button>}
   <ul className="list-item-container">{list}</ul>
       </div>;
}


export default Blocks;
