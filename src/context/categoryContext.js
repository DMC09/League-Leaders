import React, {useState,createContext} from 'react';
export const CategoryContext = createContext();


export const CategoryProvider = (props) =>{

const [data,setData] = useState([]);
const [minutes,setMinutes] = useState([]);
const [points,setPoints] = useState([]);
const [rebounds,setRebounds] = useState([]);
const [assists,setAssists] = useState([]);
const [steals,setSteals] = useState([]);
const [blocks,setBlocks] = useState([]);
const [threes,setThrees] = useState([]);
const [misc,setMisc] = useState([]);
const [currentStat,setCurrentStat] = useState('minutes');
// const [orderBy,setOrderBy] = useState(total);
  return (
    <CategoryContext.Provider
      value={[
      data,setData,
      minutes,setMinutes,
      points,setPoints,
      rebounds,setRebounds,
      assists,setAssists,
      steals,setSteals,
      blocks,setBlocks,
      threes,setThrees,
      misc,setMisc,
      currentStat,setCurrentStat
      ]}>
      {props.children}
    </CategoryContext.Provider>
  );

}
