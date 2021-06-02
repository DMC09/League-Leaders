import React, { useEffect, useContext, useState } from "react";
import { CategoryContext } from "../../context/categoryContext";
import Logo from "../../Logo.png";
import StatFilter from "./StatFilter";
import Toggle from "react-toggle";
import "../../react-switch.css";

const  StatChanger =()=> {
  const [isToggled, setToggle] = useState(false);
  const [
    data,
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
    fouls,
    setFouls,
    turnovers,
    setTurnovers,
    techfoul,
    setTechFouls,
    foulouts,
    setFoulOuts,
    currentStat,
    setCurrentStat,
    orderBy,
    setOrderBy,
    seasonType,
    setSeasonType,
  ] = useContext(CategoryContext);
  const date = new Date();

  useEffect(() => {
    //Special case for fouls because only averages available.
    if (currentStat == "fouls") {
      setOrderBy("average");
    }
    return function cleanup() {
      setOrderBy("total");
    };
  }, [currentStat]);

  function handleChange(e) {
    e.preventDefault();
    setCurrentStat(e.target.value);
  }

  function enableRegularSeason() {
    setToggle(!isToggled);
    setSeasonType("regular");
  }
  function enablePostSeason() {
    setToggle(!isToggled);
    setSeasonType("post");
  }

  return (
    <div className="stat_changer-container">
      <img className="logo" src={Logo} />
      <div className="season_container">
        <p>{date.toLocaleDateString()}</p>
        <label>
          <Toggle
            defaultChecked={false}
            icons={false}
            checked={seasonType === "regular" ? true : false}
            onChange={enableRegularSeason}
          />
          <span>Regular Season</span>
        </label>
        <label>
          <Toggle
            defaultChecked={false}
            icons={false}
            checked={seasonType === "post" ? true : false}
            onChange={enablePostSeason}
          />
          <span>Post Season</span>
        </label>
      </div>
      <div className="stat_order_container">
        <select
          disabled={seasonType === null && true}
          className="drowndown"
          onChange={handleChange}
        >
          <option
            disabled={data.length !== 0 ? true : false}
            className="drowndown"
          >
            {seasonType === null &&  "Select Season"}
            {seasonType  !== null && "Select Stat" }
          </option>
          <option className="drowndown-option" value="minutes">
            Minutes
          </option>
          <option className="drowndown-option" value="points">
            Points
          </option>
          <option className="drowndown-option" value="assists">
            Assists
          </option>
          <option className="drowndown-option" value="rebounds">
            Rebounds
          </option>
          <option className="drowndown-option" value="steals">
            Steals
          </option>
          <option className="drowndown-option" value="blocks">
            Blocks
          </option>
          <option className="drowndown-option" value="threes">
            Threes
          </option>
          <option className="drowndown-option" value="turnovers">
            Turnovers
          </option>
          <option className="drowndown-option" value="fouls">
            Fouls
          </option>
          <option className="drowndown-option" value="foul_outs">
            Fouled Out
          </option>
          <option className="drowndown-option" value="technicals">
            Technicals
          </option>
        </select>

        {currentStat !== null ? (
          <StatFilter />
        ) : (
          <div className="button-container"></div>
        )}
      </div>
    </div>
  );
}

export default StatChanger;
