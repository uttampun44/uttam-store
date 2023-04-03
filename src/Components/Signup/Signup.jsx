import React, { useState } from 'react'
import Header from '../Header/header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Singup() {

  const [user, setUser] = useState({
    username: '',
    email: '',
    passoword: '',
})
  const userInput = (e) =>{
    console.log(e.target.value);
   setUser({...user, [e.target.name]: e.target.value})
  }
  const createAccount = (e) =>{
      console.log("submit")
     setUser({username : '', email: '', passoword: ''})
   
     if(user.email.length < 11){
        alert("phone number digits is 10")
     }else{
       alert("must include 10 numbers")
       e.preventDefault();
     }
  }

  return (
    <div>
         <Header />
             <div className='signup-form'>
                 <div className='image'>
                     <img src='/src/assets/createaccountimage.jpg'/>
                 </div>

                 <div className='form'>
                     <form method='post' action='../Login/Login.jsx'>
                     <h6>Create an account</h6>
                      <p>Enter you details below</p>
                      <div className='form-design'>
                         <input placeholder='Name' type='text' name='username' onChange={userInput} required />
                         <input placeholder='Email or Phone Number' type='text' name='email' onChange={userInput} required />
                         <input placeholder='Password' type='password' name='password' onChange={userInput} required />
                      </div>

                      <div className='create-account-google'>
                         <div className='create-account'>
                             <Link to='/createaccount' onClick={createAccount} type='submit'>Create Account</Link>
                         </div>
                         
                         <div className='google-signup'>
                               <img src='/src/assets/Google.png'/> <Link to=''>Signup with Google</Link>
                         </div>

                           <div className='already-account'>
                             <p>Already have account ?</p>
                             <Link to='/login'>Login</Link>
                         </div>
                      </div>
                     </form>
                 </div>
             </div>
         <Footer />
    </div>
  )
}

export default Singup