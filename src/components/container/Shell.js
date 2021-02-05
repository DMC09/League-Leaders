import React,{useEffect} from "react";

function Shell({state}) {
  useEffect(() => {

    console.log(state,'this is the state of the selection')

  }, []);


  return <div className="main_container">
    <h1>{state}</h1>
  </div>;
}


export default Shell;
