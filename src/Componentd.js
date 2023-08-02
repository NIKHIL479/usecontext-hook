import React,{useContext,useState} from 'react'
import { store } from './App'
export const Componentd = () => {
    const [data2,setData2]=useContext(store)
  return (
    <div>
     Length is    {data2.length }
    </div>
  )
}
export default Componentd