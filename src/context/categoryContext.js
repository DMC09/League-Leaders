import React, {useState,createContext} from 'react';
export const CategoryContext = createContext();


export const CategoryProvider = (props) =>{
const [data,setData] = useState([]);
const [headshotData,setheadshotData] = useState();
const [minutes,setMinutes] = useState([]);
const [points,setPoints] = useState([]);
const [rebounds,setRebounds] = useState([]);
const [assists,setAssists] = useState([]);
const [steals,setSteals] = useState([]);
const [blocks,setBlocks] = useState([]);
const [threes,setThrees] = useState([]);
const [fouls,setFouls] = useState([]);
const [turnovers,setTurnovers] = useState([]);
const [techfoul,setTechFoul] = useState([]);
const [foulouts,setFoulOuts] = useState([]);
const [currentStat,setCurrentStat] = useState(null);
const [orderBy,setOrderBy] = useState('total');


  return (
    <CategoryContext.Provider
      value={[data,setData,
      headshotData,setheadshotData,
      minutes,setMinutes,
      points,setPoints,
      rebounds,setRebounds,
      assists,setAssists,
      steals,setSteals,
      blocks,setBlocks,
      threes,setThrees,
      fouls,setFouls,
      turnovers,setTurnovers,
      techfoul,setTechFoul,
      foulouts,setFoulOuts,
      currentStat,setCurrentStat,
      orderBy,setOrderBy
      ]}>
      {props.children}
    </CategoryContext.Provider>
  );

}
