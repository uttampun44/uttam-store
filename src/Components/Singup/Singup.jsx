import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/Footer'

function Singup() {
  return (
    <div>
         <Header />
             <div className='signup-form'>
                 <div className='image'>
                     <img src='/src/assets/createaccountimage.jpg'/>
                 </div>

                 <div className='form'>
                      <h6>Create an account</h6>
                      <p>Enter you details below</p>
                      <div className='form-design'>
                         <input placeholder='Name' type='text'/>
                         <input placeholder='Email or Phone Number' type='text'/>
                         <input placeholder='Password' type='text'/>
                      </div>
                 </div>
             </div>
         <Footer />
    </div>
  )
}

export default Singup