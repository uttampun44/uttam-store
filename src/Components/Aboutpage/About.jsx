import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function About() {

  return (
    <div>
          <Header />

             {/* about page hero section */}
             <section className='aboutpage-hero'>
                 <div className='aboutpage-title'>
                     <p>Our Story</p>
                     <br></br>
                     <div className='description'>
                         <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                          <br></br>
                         <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                     </div>
                 </div>
                 <div className='hero-image'>
                     <img src='/src/assets/aboutheroimage.png'/>
                 </div>
             </section>

              {/* company sale and goals section */}
             <section>
                  <div className='sales-goals'>
                       <div className='sales'>
                           <img src='/src/assets/sellereactive.png'/>
                           <p>10.5K</p>
                           <p>Seller active our site</p>
                       </div>

                       <div className='monthly-sales'>
                            <img src='/src/assets/monthly.png'/>
                            <p>33k</p>
                            <p>Monthly Product Sale</p>
                       </div>

                       <div className='customer-active'>
                           <img src='/src/assets/customeractive.png'/>
                           <p>45.5k</p>
                           <p>Customter active our site</p>
                       </div>
                          
                          <div className='annual-goals'>
                            <img src='/src/assets/annualgoals.png' />
                                <p>25k</p>
                                <p>Annual gross sales in our</p>
                          </div>
                   </div>
             </section>

              {/* company team description */}
                <section>
                       <div className='our-team'>
                             <div className='chairman'>
                                <div className='chairman-image'>
                                   <img src='/src/assets/chairman.png'/>
                                </div>
                               
                                <div className='chairman-details'>
                                   <p>John Doe</p>
                                   <p>Founder & chairman</p>
                                   <div className='team-profile'>
                                     <TwitterIcon /> <InstagramIcon /> <LinkedInIcon />
                                  </div>
                                </div>

                             </div>


                             <div className='managing-director'>
                                       
                               <div className='director-image'>
                                  <img src='/src/assets/managing.png' />
                               </div>

                               <div className='director-details'>
                                    <p>Jenny Wang</p>
                                    <p>Managing Director</p>
                                    <div className='team-profile'>
                                     <TwitterIcon /> <InstagramIcon /> <LinkedInIcon />
                                  </div>
                               </div>
                             </div>

                             <div className='product-designer'>
                                   <div className='designer-image'>
                                      <img src='/src/assets/productdesigner.png'/>
                                   </div>

                                   <div className='designer-details'>
                                        <p>Peter smith</p>
                                        <p>Product Designer</p>

                                        <div className='team-profile'>
                                         <TwitterIcon /> <InstagramIcon /> <LinkedInIcon />
                                        </div>
                                   </div>
                             </div>
                       </div>
                </section>
                   
                   {/* customer features section*/}
                <section>
                        <div className='customer-service-block'>
                              <div className='fastdelivery'>
                                   <img src='/src/assets/fastdelivery.png'/>

                                   <div className='fast-and-free'>
                                       <p>Free and fast delivery</p>
                                       <p>Free delivery for all orders over $140</p>
                                   </div>
                              </div>

                              <div className='customer-service'>
                                     <img src='/src/assets/customerservices.png'/>

                                     <div className='customer-support'>
                                          <p>24/7 CUSTOMER SERVICE</p>
                                          <p>Friendly 24/7 customer support</p>
                                     </div>
                              </div>

                              <div className='moneyback-guarantee'>
                                     <img src='/src/assets/moneyback.png'/>

                                     <div className='moneyback'>
                                        <p>MONEY BACK GUARANTEE</p>
                                        <p>We reurn money within 30 days</p>
                                     </div>
                              </div>
                        </div>
                </section>
          <Footer />
    </div>
  )
}

export default About