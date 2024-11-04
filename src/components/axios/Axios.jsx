import React, { useEffect, useState } from 'react'
import './Axios.css'
import axios from 'axios'
import randomusers from '../../data/randomusersdata'
const Axios = () => {
let [userdata,setUserdata]=useState([])
let [err,setErr]=useState('')

    useEffect(()=>{
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        axios.get(randomusers)
        .then((res)=>setUserdata(res.data.results ,console.log(res.data.results)))

        .catch((err)=>setErr(err.message))
    },[])
    // ----------async await using ------
    // let Apidata=async ()=>{
    //     try{
    //         let res=await axios.get('https://jsonplaceholder.typicode.com/posts')
    //         setUserdata(res.data)
    //     }
    //     catch(err){
    //         setErr(err.message)
    //     }
    // }
    // useEffect(()=>{
    //     Apidata()
    // },[])
  return (
    <div>
      <h1 style={{textAlign:'center',color:'red'}}>Axios information learn</h1>
      {err !== "" && <h2>{err}</h2> }
        <div className='axios-main'>
            {
                userdata.slice(0,33).map((post,index)=>{
                   
                    return(
                        <div key={index} className='axios-card'>
                            <img src={post.picture.medium} alt="" />
                            <h3>{post.name.first.slice(0,15).toUpperCase()}</h3>
                            <p>{post.phone}</p>
                            <p>{post.email}</p>
                        </div>
                    )
                })
            }
        </div>
      
    </div>
  )
}

export default Axios
