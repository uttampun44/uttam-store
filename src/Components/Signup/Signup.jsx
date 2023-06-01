import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Singup() {

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
})
  const userInput = (e) =>{
   setUser({...user, [e.target.name]: e.target.value})
  }
  const createAccount = (event) =>{
     setUser({username : '', email: '', password: ''})
     event.preventDefault();

     if(user.username == ""){
       alert("Please fill the form")
     }else if(user.email == ""){
      alert("Please fill the form")
     }else if(user.password == ""){
        alert("Please fill the form");
     }else{

      //fetching the data
       fetch('http://localhost/uttam-store/server/insert.php', {
        method: "POST",
        body: new URLSearchParams({
          username: user.username,
          email: user.email,
          passoword: user.password,
              }),
          })
           .then((result) => {
             if(result.data.status == 200){
              // setMessage(result.message)
              localStorage.setItem('username', result.value)
             }
          })
             .catch((error) =>{
              console.log(error)
        })
        alert("form submit");
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
                     <form method='POST' action='#'>
                     <h6>Create an account</h6>
                      <p>Enter you details below</p>
                      <div className='form-design'>
                         <input placeholder='Name' type='text' name='username' onChange={userInput}  required value={user.username}/>
                         <input placeholder='Email or Phone Number' type='text' name='email' onChange={userInput} required value={user.email}/>
                         <input placeholder='Password' type='password' name='password' onChange={userInput}  required value={user.passoword}/>
                      </div>

                      <div className='create-account-google'>
                         <div className='create-account'>
                            <input onClick={createAccount} type='submit' value="Create Account" name='submit'/>
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