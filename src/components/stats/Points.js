import React,{useEffect} from 'react';

function Points({stat}) {
  useEffect(() => {
    console.log(stat,'Main Stat Array');
    console.log(stat[0],'First array item');
    console.log(stat[0].ranks,'First array item ranks property');
  }, []);
  return <div><p>hello this is the Points compononet!</p></div>;
}


export default Points;
