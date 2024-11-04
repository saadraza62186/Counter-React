import { useState } from 'react'
import './App.css'

function App() {
  const [step, setStep] = useState(1)  // Start step at 1 so there's always a change
  const [count, setCount] = useState(0)
  
  const addStep = () => {
    setStep(step + 1)  // Increase step by 1
  }

  const removeStep = () => {
    if(step > 1) setStep(step - 1)  // Prevent step from going below 1
  }

  const addCount = () => {
    setCount(count + step)  // Increase count by the value of step
  }

  const removeCount = () => {
    if(count >= step) setCount(count - step)  // Decrease count by step, but ensure it doesn't go below 0
  }

  // Function to get the date after 'count' days from today
  const getDateFromToday = (days) => {
    const today = new Date();
    today.setDate(today.getDate() + days);  // Add 'days' to the current date
    return today.toDateString();  // Convert to readable string format
  }

  return (
    <>
     <div className='step'>
      <button onClick={removeStep}>-</button>  
      <h3>Step: {step}</h3>
      <button onClick={addStep}>+</button>
     </div>

     <div className='count'>
      <button onClick={removeCount} disabled={step === 0}>-</button>  
      <h3>Count: {count}</h3>
      <button onClick={addCount} disabled={step === 0}>+</button>
     </div>

     <h4>{count} day(s) from today is: {getDateFromToday(count)}</h4>
    </>
  )
}

export default App
