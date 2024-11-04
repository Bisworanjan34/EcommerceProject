import React, { useReducer } from 'react'
import './Example1.css'
const Example1 = () => {

let initialstate=0

let reducer=(state,action)=>{
    switch(action){
        case 'increment': return state+1
        case 'decrement': return state-1
        case 'addition':return state+10
        case 'multiplication':return state*10
        default:state
    }
}
    let [logic,dispatch]=useReducer(reducer,initialstate)
  return (
    <div className='border p-3'>
      <h1>ExampleNo-1 component count function</h1>
      <h2>Action = {logic}</h2>
      <button onClick={()=>dispatch('increment')}>increment</button>
      <button onClick={()=>dispatch('decrement')}>decrement</button>
      <button onClick={()=>dispatch('addition')}>addition</button>
      <button onClick={()=>dispatch('multiplication')}>multiplication</button>
    </div>
  )
}

export default Example1
