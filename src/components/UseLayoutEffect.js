
import efct from './UseLayout.module.css'
import Header from './Header'
import { useState,useRef,useLayoutEffect } from 'react';


export default function Dash(){
    
    document.body.style.background = "white"
  const [width,setWidth]=useState(0)
  const [height,setHeight]=useState(0)
  const containerRef = useRef(null);
    useLayoutEffect(()=>{
     const containerWidth=containerRef.current.offsetWidth;
     const conatinerHeight=containerRef.current.offsetHeight;
     setWidth(containerWidth)
     setHeight(conatinerHeight)
    },[])
        return(
            
            <div className={efct.bg}>
            <Header/>
            <div className={efct.container} ref={containerRef}>
                <p>Container Height: {height}px</p>
                <p>Container Width: {width}px</p>
            </div>
            </div>
        );
    }