import { useState } from 'react'
import './App.css'

function Square({value,onSquareClick}){
  // const [value,setvalue] =useState(null);
  // function handleclick(){
  //   setvalue("X");
  // }
  return(
  <button onClick={onSquareClick} className='column'>{value}</button>
  )
}
function App(){
  

  //this below usestate will tell the state of each box whether it is clicked or not, defualt it is filled null
  const [square,setsquare]=useState(Array(9).fill(null));
  const [Xisnext, setXisnext]=useState(true);

  function handleClick(i){
    if(square[i] || calculateWinner(square)){
      return;
    }
    const nextsquare=square.slice();
    

    if(Xisnext){
      nextsquare[i]="X";
    }
    else{
      nextsquare[i]="O";
    }
    setsquare(nextsquare);
    setXisnext(!Xisnext);
  }

  const winner=calculateWinner(square);
  let status;
  if(winner){
   status ="Winner:" +winner;
  //  return(
  //   <>
  //   <h1>{status}</h1>
  //   </>
  //  )
  }
  else{
    status= "Next player:"+ (Xisnext ? "X" :"O");
    console.log(status)
  }
  
  return(
  <>
  <div className='game'>
  <div className='Row'>
   <Square value={square[0]} onSquareClick={()=>handleClick(0)}/>
   <Square value={square[1]} onSquareClick={()=>handleClick(1)}/>
   <Square value={square[2]} onSquareClick={()=>handleClick(2)}/>
  </div>
  <div className='Row'>
  <Square value={square[3]} onSquareClick={()=>handleClick(3)}/>
  <Square value={square[4]} onSquareClick={()=>handleClick(4)}/>
  <Square value={square[5]} onSquareClick={()=>handleClick(5)}/>
  </div>
  <div className='Row'>
  <Square value={square[6]} onSquareClick={()=>handleClick(6)}/>
  <Square value={square[7]} onSquareClick={()=>handleClick(7)}/>
  <Square value={square[8]} onSquareClick={()=>handleClick(8)}/>
  </div>
  <div className='status'>
  <h1>{status}</h1>
  </div>
  </div>
  </>
  )
}

function calculateWinner(square) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
  return null;
}

export default App
