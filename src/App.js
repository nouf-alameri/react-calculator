import './App.css';
import React,{useState, useEffect} from 'react';

function App() {
  const [input, setInput] = useState(0);
  const [input2, setInput2] = useState(0); 
  return (
    <div className="App">
      <h1> Calculator </h1>
      <input onChange={(test) => setInput(test.target.value)}></input>
      <input onChange={(test) => setInput2(test.target.value)}></input>
      <h2>{input*input2}</h2>
    </div>
  );
}

export default App;
