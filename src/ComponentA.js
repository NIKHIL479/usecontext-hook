import React,{useContext,useState} from 'react'
import {store} from './App'

export const  ComponentA = () => {
  const o=useContext(store)
 
  console.log("jhg");
    const [data2,setData2,n]=useContext(store)//usecontext hook is used to get prop from parent 
    console.log(n);

  return (
    <div>componentA {data2.length}
    </div>
  )
}
export default ComponentA