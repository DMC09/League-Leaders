import React,{useEffect,useState} from 'react';

function Minutes({stat}) {
  const[orderBy,setOrderBy] = useState('total');
  const [selectedStat] = stat.filter(set=>set.type === orderBy);
  const topTen = selectedStat.ranks.slice(0,10);
  const listItems = topTen.map((item) =>
    <li className="list-item" key={item.rank}>
<div className="item-playerInfo">
  <span className="item-rank">{item.rank}</span> &nbsp;
     <span className="item-playerName">{item.player.full_name}</span>
</div>
<div className="item-team_container">
   <span className="item-teamMarket">{item.teams[0].market}</span>
    <span className="item-teamName">{item.teams[0].name}</span>
</div>
<div className="item-pos_num">
   <span className="item-num">{item.player.jersey_number}</span> &nbsp;
    <span className="item-position">{item.player.primary_position}</span>
</div>


<span className="item-score">{item.score}</span>



     </li>
  );

useEffect(() => {
  console.log(stat);
console.log(topTen);


}, []);


  return <div className="minutes_container">

<ul className="list-item-container">{listItems}</ul>
    </div>;
}


export default Minutes;
