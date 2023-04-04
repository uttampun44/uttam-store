import Home from './Components/Home/Home';
import Addtocart from './Components/Addtocart/Addtocart';
import  './scss/main.scss';
import Singup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Contact from './Components/Contact/Contact';


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
                     <Route exact path='/contact' element={<Contact />}></Route>
                  </Routes>     
             </div>  
    </BrowserRouter>
  )
}

export default App
