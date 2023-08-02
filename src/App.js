import React,{createContext,useState} from 'react' //createcontext is used to send props to specific child directly
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import Componentc from './Componentc';

export const store=createContext();
const App = () => {
  const [data2,setData2]=useState([
    {
      name:'nikhil',
      
    },
    {
      name:'kumar',
      
    }
  ])
  console.log( store);
  var n="nikhil"
  
  return (
    <div>
      <store.Provider value={[data2,setData2,n]}>
      <ComponentA/><br/>
      <ComponentB/>
      </store.Provider>

    </div>
  )
}
export default App

