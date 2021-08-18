import './App.css';
import React from 'react';
import CountUp, { useCountUp } from 'react-countup';



function App() {
  const {countup, start, pauseResume, reset, update} = useCountUp({
    duration: 5,
    end: 10000,
    startOnMount: false
  })
  return (
    <div className='App'>
      <div>
        <h1>hello</h1>
       <h1>{countup}</h1> 
      <button onClick={start}>Start</button>
      <button onClick={reset}>Reset</button>
      <button onClick={pauseResume}>Pause Resume</button>
      <button onClick={() => update(2000)}>Update</button>  
      </div>
      <CountUp start={100} end={500} prefix='Re' duration={5}/>
      <h1>
      <CountUp start={100} end={500} suffix='$' duration={5}/>
      </h1>
    </div> 
    
  )
}

export default App;
