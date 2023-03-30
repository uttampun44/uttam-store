import Home from './Components/Home/Home';
import Addtocart from './Components/Addtocart/Addtocart';
import  './scss/main.scss';
import Singup from './Components/Singup/Singup';
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  
  return (
     <BrowserRouter>
             <div className="App">
                  <Routes>
                     <Route exact path='/'  element ={ <Home /> }></Route>
                     <Route exact path='/addtocart' element={ <Addtocart />}></Route>
                     <Route exact path='/signup' element={<Singup />}></Route>
                  </Routes>     
             </div>  
    </BrowserRouter>
  )
}

export default App
