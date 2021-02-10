import React,{useEffect} from 'react';

function Points({stat}) {
  useEffect(() => {
    console.log(stat);
  }, []);
  return <div><p>hello this is the Points compononet!</p></div>;
}


export default Points;
