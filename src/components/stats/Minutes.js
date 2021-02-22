import React,{useEffect,useState} from 'react';

function Minutes({totalMins,avgMins}) {
  const[orderBy,setOrderBy] = useState('total');
  let currentStat = null;
  orderBy === 'total' ? currentStat = totalMins : currentStat = avgMins;
  let TopTenList= currentStat.ranks.slice(0,10);
  let list = TopTenList.map(item=><li>{item.rank}</li>)


useEffect(() => {
console.log(totalMins);
console.log(avgMins);
console.log(TopTenList);

}, []);


  return <div className="minutes_container">

<ul className="list-item-container">{list}</ul>
    </div>;
}


export default Minutes;
