import { useState } from 'react'

import './App.css'
import { useRef } from 'react';

function App() {
  const [time , settime ] = useState(0);
  let timeref = useRef(null);
  function handlestart (){
    timeref.current =setInterval(() => {
      settime(time =>time +1)
    }, 1000);

  }
  function stoptimer(){
   clearInterval(timeref.current);
   timeref.current = null ;
  }
  function handlereset(){
    stoptimer();
    settime(0);


  }

  return (
    <div>
      <h1>Time is : {time} secounds</h1>
      <button onClick={handlestart}>start</button>
      <br /><br />
      <button onClick={stoptimer}>stop</button>
      <br /><br />
      <button onClick={handlereset}>reset</button>
    </div>
  )
}

export default App
