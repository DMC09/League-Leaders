import React,{useEffect} from 'react';

function Steals({stat}) {
  useEffect(() => {
    console.log(stat);
  }, []);
  return <div><p>hello this is the Steals compononet!</p></div>;
}


export default Steals;
