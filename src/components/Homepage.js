import dash from './homepage.module.css'
import { useState } from 'react'
import Header from './Header'



export default function Dash(){
    
document.body.style.background = "white"

const [Counter,setCounter]=useState(0)

const [name,setName]=useState('')

const onClick=()=>{
    setCounter(Counter+1)
}

const onchange=(event)=>{
    setName(event.target.value)
}


    return(
        
        <div className={dash.bg}>
        <Header/>
        <div className={dash.container}>
        <p>{Counter}</p>
        <button onClick={onClick} className={dash.cbtn}>click</button><br/><br/>
        <input placeholder='Write your name' onChange={onchange}/>
        <p>{name}</p>
        </div>
        </div>
    );
}