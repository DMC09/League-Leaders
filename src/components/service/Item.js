


import React from 'react';

function Item({data}) {
console.log(data,'individual data sstuff');

  return <li>{data.rank}. {data.score} {data.player.full_name}. {data.player.jersey_number} {data.player.primary_position}{data.teams[0].market} {data.teams[0].name} </li>;
}

export default Item;
