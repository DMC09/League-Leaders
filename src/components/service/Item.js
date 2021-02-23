


import React from 'react';
import getHeadshot from './Headshot';

function Item({data}) {
console.log(data,'individual data stuff');
console.log(getHeadshot,'a function of sorts');

  return  <div>
    <li> {data.rank}. {data.score} {data.player.full_name}. {data.player.jersey_number} {data.player.primary_position}{data.teams[0].market} {data.teams[0].name} </li>

    <img src={getHeadshot()}/>
  </div>;
}

export default Item;
