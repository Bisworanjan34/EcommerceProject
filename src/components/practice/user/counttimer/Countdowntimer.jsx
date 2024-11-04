
import React, { useEffect, useRef, useState } from 'react'
import './Countdowntimer.css'
const Countdowntimer = () => {
  let [time,setTime]=useState(0)
  let [start,setStart]=useState(false)
  let [pause,setPause]=useState(false)
let intervalRef=useRef(null)
  let handleinput=(e)=>{
      setTime(e.target.value*60)
  }

  let formatTime=()=>{
    let min= String(Math.floor(time/60)).padStart(2,'0')
    let sec=String(time%60).padStart(2,'0')
    return `${min} : ${sec}`
  }
let interval
  let startfun = () => {
  
    console.log('start time function');
    setStart(true);
    setPause(false);
    if ( start && !pause && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time == 0) {
      clearInterval(intervalRef.current);
      setStart(false);
      setPause(false)
      alert('time is up');
    }
  };
  
  useEffect(() => {
    if (start && !pause && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(intervalRef.current);
      setStart(false);
      alert('time is up');
    }
    return clearInterval(intervalRef.current);
  }, [start, pause, time]);

  let pausefun = () => {
    clearInterval(intervalRef.current);
    setStart(false)
    setPause(true);
    console.log('pause fun active')
  };

  let resetfun = () => {
    clearInterval(intervalRef.current);
    setStart(false);
    setPause(false);
    setTime(0);
  };

  return (
    <div className='countdown-div'>
        <h1>countdown-timer</h1>
        <input type="number" placeholder='enter number' onChange={handleinput} />
        <h5>{formatTime()}</h5>
        <div className="timer-btn">
          <button onClick={startfun} >Start</button>
          <button onClick={pausefun} 
          >{pause ? 'resume': 'pause'} </button>
          <button onClick={resetfun}>Reset</button>
        </div>
    </div>
  )
}

export default Countdowntimer
