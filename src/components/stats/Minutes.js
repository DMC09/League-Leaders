import React,{useEffect,useState} from 'react';

function Minutes({stat}) {
const[orderBy,setOrderBy] = useState('total');

useEffect(() => {
  console.log(orderBy,'This is the order by');
  console.log(stat);
}, []);


  return <div><p>hello this is the Minutes compononet!</p></div>;
}


export default Minutes;
