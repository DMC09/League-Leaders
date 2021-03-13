import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../context/categoryContext";



function Item({ info, index }) {
  var persoId;

  const [pID, setpId] = useState();
  const [teamlogoname, setTeamlogoname] = useState();
  const [data,
    setData,
    headshotData,
    setheadshotData,
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
orderBy,setOrderBy,
  ] = useContext(CategoryContext);
  let Background = ``;

const mystyle = {
backgroundImage: `url(${Background})`,
height: "100%",
width: "100%",
backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 80,
    };


function getPersoID(firstName, lastName, fullName) {
    if (fullName) {
      setpId(202694);
    }
    headshotData.filter((item) => {
      if (item.firstName == firstName && item.lastName == lastName)
        setpId(item.personId);
    });
  }
function getTeamLogo(teamName){
console.log(teamName)
  setTeamlogoname(teamName.split(" ").join(""))
}
  useEffect(() => {
    getTeamLogo(info.teams[0].name)
    getPersoID(
      info.player.first_name,
      info.player.last_name,
      info.player.full_name
    );
  }, [info]);

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


      </div>
      <li className="item-info">
        <div className="item-NameScore">
          <span className="item-name">{info.player.full_name}</span>
            <img
              className="team-logo"
              src={`https://raw.githubusercontent.com/DMC09/League-Leaders/item_redesign/src/Team_logos/${teamlogoname}.png`}
            />
          <span className="item-score">
            {info.score < 1 ? `${(info.score * 100).toFixed(1)}%` : info.score}{" "}
            {orderBy === "percentage" && "of "}
            {currentStat}
            {" "}
            {orderBy === "total" && ""}
            {orderBy === "average" && " per game"}
          </span>
        </div>
      </li>
    </div>
  );
}

{ /* <img
      className="team-logo"
      src={`https://raw.githubusercontent.com/DMC09/League-Leaders/item_redesign/src/Team_logos/${teamlogoname}.png`}
    />*/}
export default Item;
