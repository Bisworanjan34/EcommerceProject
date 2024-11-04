import React, { useState } from 'react'
import axios from 'axios'
import randomusers from '../../../../data/randomusersdata'
import './Userform.css'
const Userform = () => {
 
  let data={username:'',password:''}
  let [inputData,setInputdata]=useState(data)

  let handleChange=(e)=>{
    e.preventDefault()
      setInputdata({...inputData,[e.target.name]:e.target.value})
      console.log(inputData)
  }
let getfun=(e)=>{
  e.preventDefault()
  axios.get(randomusers)
  .then((res)=>console.log(res.data.results))
  console.log('get request')
}
let postfun=(e)=>{
  e.preventDefault()
  axios.post('https://jsonplaceholder.typicode.com/users',inputData)
  .then((res)=>console.log(res.data.results))
}
let putfun=(e)=>{
  e.preventDefault()
  axios.put('https://jsonplaceholder.typicode.com/users/1',inputData)
  .then((res)=>console.log(res.data.results))
}
let deletefun=(e)=>{
  e.preventDefault()
  axios.delete('https://jsonplaceholder.typicode.com/users/1')
  .then((res)=>console.log(res.data.results))
}

    // let handlechange=(e)=>{
    //     e.preventDefault()
    //     setInputdata({...inputdata,[e.target.name]:e.target.value})
    // }

    // let postfun=(e)=>{
    //   e.preventDefault()
    //   axios.post('https://jsonplaceholder.typicode.com/posts',inputdata)
    //   .then((res)=>console.log(res))
     
    // }

    // let putfun=(e)=>{
    //   e.preventDefault()
    //   axios.put('https://jsonplaceholder.typicode.com/posts/1',inputdata)
    //   .then((res)=>console.log(res))
     
    // }
    // let deletefun=(e)=>{
    //   e.preventDefault()
    //   axios.delete('https://jsonplaceholder.typicode.com/posts/1')
    //   .then((res)=>console.log(res))
     
    // }
  return (
    <div>
        <h2>post-put-delete </h2>
      <label>username</label>
      <input type="text" name='username' placeholder='enter first-name' onChange={handleChange} value={inputData.username}/><br />
      <label>password</label>
      <input type="text" name='password' placeholder='enter first-name' onChange={handleChange} value={inputData.password} /><br />
      <div className=' w-50 userbtns-div'>
      <button onClick={getfun}>get </button>
      <button onClick={postfun}>Post</button>
      <button onClick={putfun}>update</button>
      <button className='bg-danger text-light' onClick={deletefun}>Delete</button>
      </div>
     
    </div>
    
  )
}

export default Userform
