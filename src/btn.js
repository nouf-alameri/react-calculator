import React,{useState} from "react";

function Btn (props){
    console.log(props)
return <button onClick={()=>props.y(props.X)}style={{color : "red"}}>{props.X}</button> 
}
export default Btn;