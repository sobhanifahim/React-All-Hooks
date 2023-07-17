
import efct from './UseLayout.module.css'
import Header from './Header'
import { createContext, useContext, useState} from 'react';
const ThemeContext=createContext()
const ThemeProvider=({children})=>{
   const[theme,setTheme]=useState('light')
   const toogleTheme=()=>{
    setTheme(prevTheme=>(prevTheme==='light'?'dark':'light'))
   }
   return(
    <ThemeContext.Provider value={{theme,toogleTheme}}>
        {children}
    </ThemeContext.Provider>
   );
}
const ThemedButton= ()=>{
    const {theme,toogleTheme}=useContext(ThemeContext)
    return(
        <button onClick={toogleTheme} className={`button${theme}`}> 
            Toogle Theme
        </button>
    );
}

const ThemeSwitcher=()=>{
    const{theme}=useContext(ThemeContext)
    return(
        <div className={`switcher${theme}`}>
             Current Theme: {theme}
        </div>
    );
}

export default function Dash(){
    
    document.body.style.background = "white"
        return(
            
            <div className={efct.bg}>
            <Header/>
            <br/><br/><br/>
            <ThemeProvider>
                <ThemedButton />
                <ThemeSwitcher />
            </ThemeProvider>
            
            </div>
        );
    }