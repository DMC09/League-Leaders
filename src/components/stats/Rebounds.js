import React,{useEffect} from 'react';

function Rebounds({stat}) {
  useEffect(() => {
    console.log(stat);
  }, []);
  return <div><p>hello this is the Rebounds compononet!</p></div>;
}


export default Rebounds;
