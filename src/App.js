import './App.css';
import React,{useState, useEffect} from 'react';
import Btn from "./btn.js";
import Card from './card.js';
import Input from './input.js';
import Detail from './detail.js';

function App() {
  const [input, setInput] = useState(0);
  const [input2, setInput2] = useState(0); 
  const [res, setRes] = useState(0); 
  const [deta, setDeta] =useState("Image Details"); 
  
  const a = ["+", "-", "*", "/"];
  const images = [
    {
      name: "img1",
      image:"https://dummyimage.com/600x400/000/fff",
      detail: "nice"
    }, 
    {
    name:"img2",
    image:"https://dummyimage.com/250/ffffff/000000",
    detail:"good"
    }
  ];
  const popUp = (m) => {
    setDeta(m)
  }
  const calculate = (p) =>{
    if (p=="+"){
      setRes(parseInt(input)+parseInt(input2));
      console.log(res); 
    }
    else if (p=="-"){
      setRes(parseInt(input)-parseInt(input2));
      console.log(res); 
    }
    else if (p=="*"){
      setRes(parseInt(input)*parseInt(input2));
      console.log(res); 
    }
    else {
      setRes(parseInt(input)/parseInt(input2));
      console.log(res); 
    }
  }
  return (
    <div className="App">
      <h1> Calculator </h1>
      <Input l={(test) => setInput(test.target.value)}/> 
      <input onChange={(test) => setInput2(test.target.value)}></input>
      <h2>{res}</h2>
      {
        a.map((data)=><Btn X={data} y={(e)=> calculate(e)}/>)
      }
      {
       images.map((i) => <Card n={i.name} d={i.detail} img={i.image} al={(notif) => popUp(notif)}/>) 
      }
      {/* <Btn X={"+"} y={(e)=> calculate(e)}/>
      <Btn X={"-"} y={(e)=> calculate(e)}/>
      <Btn X={"*"} y={(e)=> calculate(e)}/>
      <Btn X={"/"} y={(e)=> calculate(e)}/> */}
      <Detail z={deta}/>

    </div>
  );
}

export default App;
