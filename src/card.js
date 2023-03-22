import React,{useState} from "react";

function Card (props){
return (
    <div>
        <img src={props.img} onClick={()=>props.al(props.img)} style={{width : "50 px", height:"50px"}}/>
        <p onClick={()=>props.al(props.d)}>{props.n}</p>
    </div>

)
}

export default Card; 