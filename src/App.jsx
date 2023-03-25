import Home from './Components/Home/Home'
import  './scss/main.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  
  return (
     <BrowserRouter>
             <div className="App">
                  <Routes>
                     <Route path='/'  element ={ <Home /> }></Route>
                  </Routes>     
             </div>  
    </BrowserRouter>
  )
}

export default App
