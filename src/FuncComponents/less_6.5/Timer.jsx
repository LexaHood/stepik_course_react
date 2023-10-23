import { useEffect, useRef, useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(() => {
    const storageCount = localStorage.getItem('count');
    return +storageCount || 0;
  });
  const [isCounting, setCounting] = useState(false);
  const timerRef = useRef(undefined);

  const handleStart = () => {
    setCounting(true);
    timerRef.current = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
  };

  const handleStop = () => {
    if (timerRef.current) {
      setCounting(false);
      clearInterval(timerRef.current);
      timerRef.current = undefined;
      console.log('timerId was clean');
    }
  }

  const handleReset = () => {
    handleStop();
    setCount(0);
  };

  useEffect(() => {
    return () => handleStop();
  }, []);

  useEffect(() => {
    localStorage.setItem('count', count);
    console.log(`LocalStorage updated: count = ${localStorage.getItem('count')}`);
  }, [count]);

  return (
    <div className="App">
      <h1>React Timer</h1>
      <h3>{count}</h3>
      {!isCounting ? (
        <button className='button-22' style={{ margin: '0 0.5rem' }} onClick={() => handleStart()}>Start</button>
      ) : (
        <button className='button-22' style={{ margin: '0 0.5rem' }} onClick={() => handleStop()}>Stop</button>
      )}
      <button className='button-22' style={{ margin: '0 0.5rem' }} onClick={() => handleReset()}>Reset</button>
    </div>
  );
};