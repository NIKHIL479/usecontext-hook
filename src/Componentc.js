import React,{useContext,useState} from 'react'
import { store } from './App'
import Componentd from './Componentd'

export const Componentc = () => {
    const [data2,setData2]=useContext(store)
  return (
    <div style={{color:'red'}}>
        {data2.length}
        <Componentd/>
    </div>
  )
}

export default Componentc