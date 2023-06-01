import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


function Login() {

  const [loginInput, setInput] = useState({
     email: '',
     password: ''
  })
    const userInput = (e) =>{

       setInput({...loginInput, [e.target.name]: e.target.value})
    }
  const Button = styled(Link)`
     color: ${props => props.primary ? '#fff': '#000'};
     font-weight: 500;
     text-decoration: none;
     font-size: 1.1vw;
     line-height: 24px;
     `;

      const login = (e) =>{
        e.preventDefault()
        setInput({email: '', password: ''});
        console.log("form design")

        if(loginInput.email == ''){
            alert("Please fill the email input")
        }else if(loginInput.password == ''){
          alert("Please fill the password");
        }else{

        fetch('http://localhost/uttam-store/server/login.php', {
          method: 'POST',
          body: new URLSearchParams({
            email: loginInput.email,
            password: loginInput.password
          })
        })
        .then((result) =>{
            if(result.data.status == 200){
               window.localStorage.setItem('email', result.data.email);
               window.localStorage.setItem('password', result.data.password)
            }
        })
        .catch((error) =>{
           console.log(error)
        })
        alert("form submit")
      }
    }

  return (
    <div>
            <Header />
                  <div className='login-form-section'>

                        <div className='login-image'>
                          <img src='/src/assets/createaccountimage.jpg'/>
                      </div>
                      <div className='login-form-design'>
                             <div className='login-heading'>
                                <p>Login to Uttam Store</p>
                                <p>Enter your details below</p>
                             </div>
                            <div>
                              <form method='post' action='/'>
                                <div className='inputs-field'>
                                    <input type='text' name='email'  placeholder='Email or phone number' onChange={userInput}/>
                                     <input type='password' name='password' placeholder='Password' onChange={userInput}/>
                                 </div>
                              <div className='forget-password'>
                                   <div className='login'>
                                     <input to='/' primary type='submit' value="Login" style={{fontSize: '1.1rem', fontWeight: '500'}} onClick={login}/>
                                 </div>

                                  <div>
                                     <Button to='/'>Forget Password</Button>
                                  </div>
                              </div>
                              </form>
                             </div>
                      </div>
                  </div>
            <Footer />
    </div>
  )
}

export default Login