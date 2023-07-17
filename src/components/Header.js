import dash from './Header.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'

function Slider(){
    return(
       <div className={dash.sliderdiv}>
           <ul className={dash.items}>
           <Link to='/'><li>useState</li></Link>
           <Link to='/usereducer'><li>useReducer</li></Link>
           <Link to='/useeffect'><li>useEffect</li></Link>
           <Link to='/useref'><li>useRef</li></Link>
           <Link to='/uselayouteffect'><li>useLayoutEffect</li></Link>
           <Link to='/usecontext'><li>useContext</li></Link>
           <Link to='/usememo'><li>useMemo</li></Link>
           <Link to='/usecallback'><li>useCallback</li></Link>
           </ul>
 
 
       </div> 
 
 
    );
 
 
 }
 function Header(){
     const [show,setShow]=useState(true)
     return(
         <div className={dash.header}>
             
         <button className={dash.slider} onClick={()=>setShow(!show) }><FontAwesomeIcon icon={faSliders} className={dash.slidericon} /></button>
         { show?<Slider/>:null}
         </div>
     );
 }
 
export default Header;