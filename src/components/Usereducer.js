import { useReducer } from 'react'
import reduce from './Usereducer.module.css'
import Header from './Header'

 const reducer=(state,action)=>{
     switch (action.type){
         case 'change':
            const clr=action.payload
            document.body.style.background = clr;
             return {...state,changeColor: clr,count:clr ? (state.count < 7 ? state.count + 1 : 7):0};
         default:
             return state;
     }
    }
export default function Dash(){
    
   
    const [state,dispatch]=useReducer(reducer,{changeColor:'',count:0})
    
    const handleInputChange=(event)=>{
        const color=event.target.value;
        dispatch({type:'change',payload:color});
    }
    
        return(
            
            <div className={reduce.bg}>
            <Header/>
            <div className={reduce.container}>
            <input placeholder='Enter color hex code' onChange={handleInputChange} maxLength={7}/>
            <p>{state.count}</p>
            </div>
            </div>
        );
    }