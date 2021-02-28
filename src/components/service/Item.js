import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../context/categoryContext";

function Item({ info, index }) {
  var persoId;
  const [pID, setpId] = useState();
  const [
    data,
    setData,
    minutes,
    setMinutes,
    points,
    setPoints,
    rebounds,
    setRebounds,
    assists,
    setAssists,
    steals,
    setSteals,
    blocks,
    setBlocks,
    threes,
    setThrees,
    misc,
    setMisc,
    currentStat,
    setCurrentStat,
    headshotData,
    setheadshotData,
  ] = useContext(CategoryContext);

  function getPersoID(firstName, lastName, fullName) {

    if(fullName){
      setpId(202694)
    }
    headshotData.filter((item) => {
      if (item.firstName == firstName && item.lastName == lastName)
        setpId(item.personId);
    });
  }

  useEffect(() => {
    getPersoID(
      info.player.first_name,
      info.player.last_name,
      info.player.full_name
    );
  }, [info]);

  useEffect(() => {

  }, []);

  return (
    <div className="item-container">
      <div className="headshot-container">
      <img className='headshot'
        src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${pID}.png`}
        />
      </div>
      <li className="item-info">
        <span className="item-rank">{info.tied === "false" ? info.rank : index + 1}</span>

       {info.player.full_name} {info.score < 1 ? `${(info.score*100).toFixed(1)}%`   :info.score}  {info.teams[0].market}{" "}
        {info.teams[0].name}
<div className="item-jersey_position">
        {info.player.jersey_number}
        <hr />
        {info.player.primary_position}
        </div>
      </li>
    </div>
  );
}

export default Item;
