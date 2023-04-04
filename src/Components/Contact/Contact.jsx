import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Contact() {
  return (
    
    <div>
              <Header />
                
                <section>
                     <div className='contact-section'>
                         <div className='call-write-us'>
                               <div className='call-us'>
                                    <div className='call-img'>
                                        <img src='/src/assets/icons-phone.png'/>
                                        <p>call to us</p>
                                    </div>

                                    <div className='available'>
                                      <p>We are available 24/7, 7 days a week.</p>
                                      <p>Phone: +8801611112222</p>
                                    </div>
                               </div>
                                   <hr></hr>
                               <div className='write-us'>
                                  <div className='write-img'>
                                        <img src='/src/assets/icons-mail.png'/>
                                        <p>call to us</p>
                                    </div>

                                    <div className='emaildetails'>
                                      <p>Fill out our form and we will contact you within 24 hours.</p>
                                      <p>Emails: customer@uttamstore.com</p>
                                      <p>Emails: support@uttamstore.com</p>
                                    </div>
                               </div>
                         </div>
         
                         <div className='sendmessage-section'>
                              <form method='post'>
                                   <div className='name-email-phone'>
                                         <input placeholder='Your Name' type='text' autoComplete='false'/>
                                         <input placeholder='Your Email' type='email' autoComplete='false'/>
                                         <input placeholder='Your Phone' type='text' autoComplete='false'/>
                                   </div>

                                   <div className='message'>
                                        <div className='message-textarea'>
                                          <textarea placeholder='your message'></textarea>
                                        </div>
                                        <div className='send-message'>
                                             <input type='submit' value="send message" />
                                        </div>
                                   </div>
                              </form>
                         </div>
                     </div>
               </section>
                <Footer />
              
       </div>
  )
}

export default Contact