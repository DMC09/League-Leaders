import React,{useEffect} from 'react';

function Blocks({stat}) {
  useEffect(() => {
    console.log(stat);
  }, []);
  return <div><p>hello this is the Blocks compononet!</p></div>;
}


export default Blocks;
