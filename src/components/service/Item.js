import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../context/categoryContext";
import Fade from 'react-reveal/Fade';



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
    techfoul,setTechFouls,
    foulouts,setFoulOuts,
    currentStat,
    setCurrentStat,
orderBy,setOrderBy,
  ] = useContext(CategoryContext);





function getPersoID(firstName, lastName, fullName) {
  // Junior/Seniors special logic
    if (fullName === "Marcus Morris Sr.") setpId(202694);
    if (fullName === "Troy Brown Jr.") setpId(1628972);
    if (fullName === "Vernon Carey Jr.") setpId(1630176);
    if (fullName === "Wendell Carter Jr.") setpId(1628976);
    if (fullName === "Tim Hardaway Jr.") setpId(203501);
    if (fullName === "Danuel House Jr.") setpId(1627863);
    if (fullName === "Jaren Jackson Jr.") setpId(1628991);
    if (fullName === "Derrick Jones Jr.") setpId(1627884);
    if (fullName === "Kira Lewis Jr.") setpId(1630184);
    if (fullName === "Kenyon Martin Jr.") setpId(1630231);
    if (fullName === "Larry Nance Jr.") setpId(1626204);
    if (fullName === "Kelly Oubre Jr.") setpId(1626162);
    if (fullName === "Michael Porter Jr.") setpId(1629008);
    if (fullName === "Kevin Porter Jr.") setpId(1629645);
    if (fullName === "Otto Porter Jr.") setpId(203490);
    if (fullName === "Dennis Smith Jr.") setpId(1628372);
    if (fullName === "Gary Trent Jr.") setpId(1629018);
    if (fullName === "Robert Williams III") setpId(1629057);

    headshotData.filter((item) => {
      if (item.firstName == firstName && item.lastName == lastName)
        setpId(item.personId);
    });
  }
function getTeamLogo(teamName){

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


    <Fade >
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
      <div className="item-info">
        <div className="item-NameScore">
          <span className="item-name">{info.player.full_name}</span>
          <span className="item-score">
            {info.score < 1 ? `${(info.score * 100).toFixed(1)}%` : info.score}
            {currentStat !== "foul_outs" &&" "}
            {orderBy === "percentage" && "of "}
            {currentStat == "foul_outs" ? 'x fouled out': currentStat}
            {" "}
            {orderBy === "total" && ""}
            {orderBy === "average" && " per game"}
          </span>
        </div>
      </div>
      <div className="team-logo-container">

        <img
          className="team-logo"
          src={`https://raw.githubusercontent.com/DMC09/League-Leaders/item_redesign/src/Team_logos/${teamlogoname}.png`}
        />
      </div>
    </div>
  </Fade>
  );
}

export default Item;
