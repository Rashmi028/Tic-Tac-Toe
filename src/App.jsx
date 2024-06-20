import { useState } from 'react'
import './App.css'

function Square(){
  const [value,setvalue] =useState(null);
  function handleclick(){
    setvalue("X");
  }
  return(
  <button onClick={handleclick} className='column'>{value}</button>
  )
}
function App(){

  return(
  <>
  <div className='game'>
  <div className='Row'>
   <Square/>
   <Square />
   <Square/>
  </div>
  <div className='Row'>
  <Square/>
   <Square />
   <Square/>
  </div>
  <div className='Row'>
  <Square/>
   <Square />
   <Square/>
  </div>
  </div>
  </>
  )
}

export default App
