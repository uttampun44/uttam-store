import Home from './Components/Home/Home';
import Addtocart from './Components/Addtocart/Addtocart';
import  './scss/main.scss';
import Singup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import About from './Components/Aboutpage/About';
import Contact from './Components/Contact/Contact';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
  
  return (
     <Provider store={store}>
                <BrowserRouter>
                     <div className="App">
                        <Routes>
                             <Route exact path='/'  element ={ <Home /> }></Route>
                             <Route exact path='/addtocart/:id' element={ <Addtocart />}></Route>
                             <Route exact path='/signup' element={<Singup />}></Route>
                             <Route exact path='/login' element={<Login />}></Route>
                             <Route exact path='/about' element={<About />}></Route>
                             <Route exact path='/contact' element={<Contact />}></Route>
                       </Routes>     
                </div>  
          </BrowserRouter>
     </Provider>
  )
}

export default App
