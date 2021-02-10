import React,{useEffect} from 'react';

function Threes({stat}) {
  useEffect(() => {
    console.log(stat);
  }, []);
  return <div><p>hello this is the Threes compononet!</p></div>;
}


export default Threes;
