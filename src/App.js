import './App.css';
import { useState } from 'react';

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [dateof, setdataof] = useState(new Date());

  const formattedDate = dateof.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  function parafoo() {
    const newDate = new Date(dateof); // Create a new Date object to avoid mutation
  
    if (count === 0) {
      return "Today is " + formattedDate;
    } else {
      newDate.setDate(newDate.getDate() + count);
      const formattedNewDate = newDate.toLocaleDateString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
      return count + " days from today is " + formattedNewDate;
    }
  }
  

  const incrementStep = () => {
    setStep(step + 1);
  };

  const decrementStep = () => {
    setStep(step - 1);
  };

  const incrementCount = () => {
    setCount(count + step);
  };

  const decrementCount = () => {
    setCount(count - step);
  };

  // Format the date to display only the date portion

  return (
    <div className="container">
      <div>
        <button onClick={decrementStep}>-</button> Step: {step} <button onClick={incrementStep}>+</button>
      </div>
      <div>
        <button onClick={decrementCount}>-</button> Count: {count} <button onClick={incrementCount}>+</button>
      </div>
      <div className='paradiv'>{parafoo()}</div>
    </div>
  );
}

export default App;
