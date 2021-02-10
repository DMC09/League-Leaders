import React,{useEffect} from 'react';

function Assists({stat}) {
  useEffect(() => {
    console.log(stat);
  }, []);
  return <div><p>hello this is the Assists compononet!</p></div>;
}


export default Assists;
