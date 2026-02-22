import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const timeRef = useRef(null);

  function handleStart() {
    if (timeRef.current !== null) return;

    timeRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }

  function handleStop() {
    clearInterval(timeRef.current);
    timeRef.current = null;
  }

  function handleReset() {
    handleStop();
    setTime(0);
  }

  return (
    <div className="container">
      <div className="timer-card">
        <h1 className="title">Stopwatch</h1>
        <div className="time">{time} s</div>

        <div className="buttons">
          <button className="btn start" onClick={handleStart}>
            Start
          </button>
          <button className="btn stop" onClick={handleStop}>
            Stop
          </button>
          <button className="btn reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;