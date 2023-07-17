import efct from './UseMemo.module.css'
import Header from './Header'
import { useState,useMemo } from 'react';



export default function Dash(){
    
    document.body.style.background = "white"
    const [count,setCount]=useState(0)
    const Calculate=useMemo(()=>{
        console.log('Calculating......')
        let res=0;
        for(let i=0;i<count;i++){
            res=res+i;
        }
        return res;
    },[count])
        return(
            
            <div className={efct.bg}>
            <Header/>
            <div className={efct.container} >
            <p>Count: {count}</p>
            <p>Result of Expensive Calculation: {Calculate}</p>
            <button onClick={() => setCount(count + 1)} className={efct.cbtn}>Click</button>
            </div>
            </div>
        );
    }