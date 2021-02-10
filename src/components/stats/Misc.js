import React,{useEffect} from 'react';

function Misc({stat}) {
  useEffect(() => {
    console.log(stat);
  }, []);
  return <div><p>hello this is the Misc compononet!</p></div>;
}


export default Misc;
