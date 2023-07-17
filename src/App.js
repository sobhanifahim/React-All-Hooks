import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Homepage from './components/Homepage';
import Usereducer from './components/Usereducer'
import Useeffect from './components/UseEffect'
import UseRef from './components/UseRef';
import  UseLayoutEffect  from './components/UseLayoutEffect';
import UseContext from'./components/Usecontext';
import UseMemo from './components/USeMemo';
import UseCallback from './components/UseCallback';
function App() {
  return (
    <div className="App">
      <BrowserRouter>     
        <Routes>
                <Route path = "/" element={<Homepage/>}></Route>  
                <Route path = "/usereducer" element={<Usereducer/>}></Route>  
                <Route path = "/useeffect" element={<Useeffect/>}></Route>  
                <Route path = "/useref" element={<UseRef/>}></Route>  
                <Route path = "/uselayouteffect" element={<UseLayoutEffect/>}></Route>  
                <Route path = "/usecontext" element={<UseContext/>}></Route>  
                <Route path = "/usememo" element={<UseMemo/>}></Route>  
                <Route path = "/usecallback" element={<UseCallback/>}></Route>  
        </Routes>
      </BrowserRouter>
                
    </div>
  );
}

export default App;
