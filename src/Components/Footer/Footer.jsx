import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright'; 

function Footer() {

     const sendicon = {
          color: "#fff",
          position: 'absolute',
          right: '10%',
          top: '20%',
     }

     const socialMedia = {
          color: '#fff',
     }
  return (
   <footer >
         <div className='footer-name'>
                <div className='footer-menu'>
                     <div className='uttam-store-footer'>
                          <h5>Uttam Store</h5>
                          <div className='subscribe'>
                              <p>Subscribe</p>
                              <p>Get 10% off your first order</p>
                             <div className='email'>
                               <input placeholder='Enter your email' type='text'/>
                               <SendIcon style={sendicon}/>
                             </div>
                          </div>
                     </div>

                     <div className='support'>
                          <p>Support</p>
                          <div className='support-details'>
                              <p> Charkhal Rd, Kathmandu 44605</p>
                              <p>uttamstore@gmail.com</p>
                              <p>+88015-88888-9999</p>
                          </div>
                     </div>

                     <div className='my-account'>
                           <p>My Account</p>
                           
                           <div className='my-account-details'>
                                     <Link>My Account</Link>
                                     <Link>Login/Register</Link>
                                     <Link>Cart</Link>
                                     <Link>whistlist</Link>
                                     <Link>Shop</Link>
                           </div>
                     </div>

                     <div className='quick-links'>
                           <p>Quick Links</p>
                           <div className='links'>
                              <p>Privacy Policy</p>
                              <p>Terms Of Use</p>
                              <p>FAQ</p>
                              <p>Contact</p>
                           </div>
                     </div>
                        
                        <div className='download-app'>
                            <p>Download App</p>
                             <div className='app-images'>
                             <p>Save $3 with App New User Only</p>
                                <img src='/src/assets/qr.png'/>

                                <div className='social-media-icon'>
                                    <FacebookIcon style={socialMedia}/>
                                    <TwitterIcon style={socialMedia}/>
                                    <InstagramIcon style={socialMedia}/>
                                    <LinkedInIcon style={socialMedia}/>
                                </div>
                             </div>
                        </div>
                </div>
         </div>
         <div className='copyrights'>
                <CopyrightIcon style={socialMedia}/> <p>Copyright Rimel 2022. All right reserved</p>
         </div>
   </footer>
  )
}

export default Footer