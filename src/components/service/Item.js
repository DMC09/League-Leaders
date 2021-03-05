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
    fouls,setFouls,
    turnovers,setTurnovers,
    techfoulouts,setTechFoulOuts,
    currentStat,
    setCurrentStat,
    headshotData,
    setheadshotData,
  ] = useContext(CategoryContext);

  function getPersoID(firstName, lastName, fullName) {
    if (fullName) {
      setpId(202694);
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

  useEffect(() => {}, []);

  return (


    <div className="item-container">
      <div className="headshot-container">
        <span className="item-rank">
          {info.tied === "false" ? info.rank : index + 1}
        </span>
        <div className="item-jersey_position">
          <span className="item-jersey">{info.player.jersey_number}</span>
          <hr />
          <span className="item-position">{info.player.primary_position}</span>
        </div>
        <img
          className="headshot"
          src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${pID}.png`}
        />
        <div className="item-teamMarketName">
          <span className="item-teamMarket">{info.teams[0].market}</span>{" "}
          <span className="item-teamName">{info.teams[0].name}</span>
        </div>
      </div>

      <li className="item-info">
        <div className="item-NameScore">
          <span className="item-name">{info.player.full_name}</span>
          <span className="item-score">
            {info.score < 1 ? `${(info.score * 100).toFixed(1)}%` : info.score}{" "}
            {currentStat}
          </span>
        </div>
      </li>
    </div>
  );
}

export default Item;
