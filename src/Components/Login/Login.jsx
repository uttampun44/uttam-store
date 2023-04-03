import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
function Login() {

  const Button = styled(Link)`
     color: ${props => props.primary ? '#fff': '#000'};
     font-weight: 500;
     text-decoration: none;
     font-size: 1.1vw;
     line-height: 24px;
     `;
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
                              <form>
                                <div className='inputs-field'>
                                    <input type='text' name='email' required placeholder='Email or phone number'/>
                                     <input type='password' name='password' required placeholder='Password'/>
                                 </div>
                              <div className='forget-password'>
                                   <div className='login'>
                                     <Button to='/' primary type='submit'>Login</Button>
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