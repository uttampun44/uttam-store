import Home from './Components/Home/Home';
import Addtocart from './Components/Addtocart/Addtocart';
import  './scss/main.scss';
import Singup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import About from './Components/Aboutpage/About';
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  
  return (
     <BrowserRouter>
             <div className="App">
                  <Routes>
                     <Route exact path='/'  element ={ <Home /> }></Route>
                     <Route exact path='/addtocart' element={ <Addtocart />}></Route>
                     <Route exact path='/signup' element={<Singup />}></Route>
                     <Route exact path='/login' element={<Login />}></Route>
                     <Route exact path='/conatc' element={<About />}></Route>
                  </Routes>     
             </div>  
    </BrowserRouter>
  )
}

export default App
