import { useState,useEffect } from 'react'
import efct from './UseEffect.module.css'
import Heart from "react-animated-heart";
import Header from './Header'

export default function Dash(){
    
    document.body.style.background = "white"
    const [isClick, setClick] = useState(false);
    useEffect(() => {
        document.title = `Love React | ${isClick ? 'Liked' : 'Not Liked'}`;
      }, [isClick]);
    
        return(
            
            <div className={efct.bg}>
            <Header/>
            <div className={efct.container}>
            <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
            <p>{isClick?'Reacted ❤️️':'Not Reacted 😡'}</p>
            </div>
            </div>
        );
    }