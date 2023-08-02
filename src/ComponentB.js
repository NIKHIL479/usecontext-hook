import React,{useContext,useState} from 'react'
import {store} from './App'
import Componentc from './Componentc'

export const ComponentB = () => {
    console.log(Componentc ,"aaa");
    const [data2,setData2]=useContext(store)
    const [name1,setName]=useState(null)
    const sh=(e)=>{
        e.preventDefault()
        setData2([...data2,{name:name1}])
    }
  return (
    <div> {data2.map((item)=>
        <li>{item.name}</li>
    )}
    <form onSubmit={sh}>
        <input type="text" onChange={(e)=>{
            setName(e.target.value)
        }}/>
        <input type="submit" value="submit"/>
    </form>
    <Componentc/>
    
    </div>
  )
}
export default ComponentB
