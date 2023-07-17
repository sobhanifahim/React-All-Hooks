import efct from './UseCallback.module.css'
import Header from './Header'
import { useState,useCallback } from 'react';


export default function Dash(){
    
    document.body.style.background = "white"
    const [name,setName]=useState('')
    const [food,setFood]=useState('')
    const handleName=useCallback((event)=>{
          setName(event.target.value)
    },[])
    const handleFood=useCallback((event)=>{
        setFood(event.target.value)
  },[])
        return(
            
            <div className={efct.bg}>
            <Header/>
            <div className={efct.container} >
            <div>
                    
                    <input type="text"  onChange={handleName} placeholder='Enter your name'/>
            </div>
            <div>
                    <input type="text"  onChange={handleFood} placeholder='Enter food name'/>
            </div>
            <div>
                    <p>My name is {name}</p>
                    <p>My favourite food is {food}</p>
            </div>

            </div>
            </div>
        );
    }