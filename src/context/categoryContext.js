import React, {useState,createContext} from 'react';
export const CategoryContext = createContext();


export const CategoryProvider = (props) =>{
const [data,setData] = useState();
  return (
    <CategoryContext.Provider
      value={[data,setData]}>
      {props.children}
    </CategoryContext.Provider>
  );

}
