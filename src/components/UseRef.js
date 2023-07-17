import { useRef} from 'react'
import efct from './UseRef.module.css'
import Header from './Header'

export default function Dash(){
    
    document.body.style.background = "white"
    const inputRef=useRef(null)
 
    const handleClick=()=>{
        inputRef.current.value='';
        inputRef.current.focus();
    }
    
        return(
            
            <div className={efct.bg}>
            <Header/>
            <div className={efct.container}>
            <input placeholder='Enter Text' ref={inputRef}/><br/><br/>

            <button onClick={handleClick}>Clear and Focus</button>
            </div>
            </div>
        );
    }