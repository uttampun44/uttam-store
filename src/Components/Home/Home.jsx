import React from 'react'
import Header from '../Header/header'
import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import StarIcon from '@mui/icons-material/Star';

function Home() {
  return (
    <div>
          <Header />
          <section>
                <div className='offerhero_section'>
                     <div className='subsection-menu'>
                          <ul>
                               <li><Link>Woman Fashion</Link></li>
                               <li><Link>Men's Fashion</Link></li>
                               <li><Link>Electronics</Link></li>
                               <li><Link>Home & Lifestyle</Link></li>
                               <li><Link>Medicine</Link></li>
                               <li><Link>Sports & Outdoor</Link></li>
                               <li><Link>Baby's & Toys</Link></li>
                               <li><Link>Groceries & Pets</Link></li>
                               <li><Link>Healthy & Beauty</Link></li>
                          </ul>
                     </div>
                     
                     <div className='carousel'>
                            <Carousel showThumbs={false} showStatus={false} controls={false} autoPlay={true} infiniteLoop={true}>
                                <div className='first-carousel'>
                                    <div className='shop-now'>
                                     <div className='apple-first'>
                                         <img src='/src/assets/Apple_logo.png'/>
                                         <p>Iphone 14 series</p>
                                      </div>
                                      <div className='upto'>
                                       <h2>Up to 10% off Voucher</h2>
                                      </div>
                                      <div className='shop'>
                                         <Link to='/shopnow'>Shop now</Link><ArrowRightAltIcon style={{color: 'white'}}/>
                                      </div>
                                    </div>
                                     
                                     <div className='apple-second'>
                                         <img src='/src/assets/heroimageone.svg'/>
                                     </div>
                                </div>

                                <div className='first-carousel'>
                                    <div className='shop-now'>
                                     <div className='apple-first'>
                                         <p>Grab the sport equipment</p>
                                      </div>
                                      <div className='upto'>
                                       <h2>Up to 10% off Voucher</h2>
                                      </div>
                                      <div className='shop'>
                                         <Link to='/shopnow'>Shop now</Link><ArrowRightAltIcon style={{color: 'white'}}/>
                                      </div>
                                    </div>
                                     
                                     <div className='apple-second'>
                                         <img src='/src/assets/sports.png'/>
                                     </div>
                                </div>

                                <div className='first-carousel'>
                                    <div className='shop-now'>
                                     <div className='apple-first'>
                                         <img src='/src/assets/Apple_logo.png'/>
                                         <p>Iphone 14 series</p>
                                      </div>
                                      <div className='upto'>
                                       <h2>Up to 10% off Voucher</h2>
                                      </div>
                                      <div className='shop'>
                                         <Link to='/shopnow'>Shop now</Link><ArrowRightAltIcon style={{color: 'white'}}/>
                                      </div>
                                    </div>
                                     
                                     <div className='apple-second'>
                                         <img src='/src/assets/heroimageone.svg'/>
                                     </div>
                                </div>

                                <div className='first-carousel'>
                                    <div className='shop-now'>
                                     <div className='apple-first'>
                                         <p>Women's Fashion</p>
                                      </div>
                                      <div className='upto'>
                                       <h2>Up to 10% off Voucher</h2>
                                      </div>
                                      <div className='shop'>
                                         <Link to='/shopnow'>Shop now</Link><ArrowRightAltIcon style={{color: 'white'}}/>
                                      </div>
                                    </div>
                                     
                                     <div className='apple-second'>
                                         <img src='/src/assets/fashion.png'/>
                                     </div>
                                </div>
                            </Carousel>
                     </div>
                </div>
          </section>
                   
                    {/* today deals sections */}
          <section>
               <div className='main-deal'>
                    <div className='today-title'>
                         <div className='today-div'></div>
                         <div className='todays'> <h3>Today's</h3></div>
                    </div>
                    <div className='flash-sales-section'>
                        <div className='flash-sales'>
                             <h4>Flash sales</h4>
                        </div>
                        <div className='time'>
                           <div className='display-date'>
                                  <span>Days &nbsp; &nbsp; &nbsp; &nbsp; </span><span>Hours  &nbsp; &nbsp; &nbsp; &nbsp; </span><span>Minutes  &nbsp; &nbsp; &nbsp; &nbsp; </span><span>seconds  &nbsp; &nbsp; &nbsp; &nbsp;</span>   
                           </div>
                           <div className='display-time'>
                                <span>03 :</span> <span>23 :</span> <span>19 :</span> <span> &nbsp;20</span>
                           </div>
                        </div>
                    </div>

                    <div className='sales-slider'>
                                 <div className='imageSales-slider'>
                                   <div className='slider-one'>
                                      <div className='slider-image-one'>
                                          <img src='/src/assets/remote.png'/> 
                                      </div>
                                      <div className='add-to-cart'>
                                              <Link>Add to cart</Link>
                                          </div> 
                                         
                                          <div className='description'>
                                             <p>HAVIT HV-692 Gamepad</p>
                                             <p>$120 <span>$160</span></p>
                                              <div className='ratings'>
                                               <StarIcon style={{color: '#FFAD33'}}/> <StarIcon style={{color: '#FFAD33'}}/> <StarIcon style={{color: '#FFAD33'}}/> <StarIcon style={{color: '#FFAD33'}}/> <StarIcon style={{color: '#FFAD33'}}/> <span>(88)</span>
                                              </div>
                                         </div>  
                                   </div>

                                   <div className='slider-two'>
                                      <div className='slider-image-two'>
                                          <img src='/src/assets/gamekeyboard.png'/>
                                      </div>

                                      <div className='add-to-cart'>
                                              <Link>Add to cart</Link>
                                          </div>  
                                          <div className='description'>
                                             <p>Ak-900 Wired Keyboard</p>
                                             <p>$960 <span>$1160</span></p>
                                              <div className='ratings'>
                                               <StarIcon style={{color: '#FFAD33'}}/> <StarIcon style={{color: '#FFAD33'}}/> <StarIcon style={{color: '#FFAD33'}}/> <StarIcon style={{color: '#FFAD33'}}/> <StarIcon style={{color: '#000'}}/> <span>(88)</span>
                                              </div>
                                         </div>  
                                   </div>

                                   <div className='slider-three'>
                                      <div className='slider-image-one'>
                                          <img src='/src/assets/gamemonitor.png'/>  
                                      </div>
                                      <div className='add-to-cart'>
                                              <Link>Add to cart</Link>
                                          </div>  
                                          <div className='description'>
                                             <p>IPS LCD Gaming Monitor</p>
                                             <p>$370 <span>$400</span></p>
                                              <div className='ratings'>
                                               <StarIcon style={{color: '#FFAD33'}}/> <StarIcon style={{color: '#FFAD33'}}/> <StarIcon style={{color: '#FFAD33'}}/> <StarIcon style={{color: '#FFAD33'}}/> <StarIcon style={{color: '#FFAD33'}}/> <span>(88)</span>
                                              </div>
                                         </div>  
                                   </div>

                                   <div className='slider-four'>
                                      <div className='slider-image-one'>
                                          <img src='/src/assets/chair.png'/>  
                                      </div>
                                      <div className='add-to-cart'>
                                              <Link>Add to cart</Link>
                                          </div>  
                                          <div className='description'>
                                             <p>S Series Conmfor Chair</p>
                                             <p>$375 <span>$400</span></p>
                                              <div className='ratings'>
                                               <StarIcon style={{color: '#FFAD33'}}/> <StarIcon style={{color: '#FFAD33'}}/> <StarIcon style={{color: '#FFAD33'}}/> <StarIcon style={{color: '#FFAD33'}}/> <StarIcon style={{color: '#FFAD33'}}/> <span>(88)</span>
                                              </div>
                                         </div>  
                                   </div>
                                  </div>
                        </div>
                        <div className='view-products'>
                            <Link>View All Products</Link>
                        </div>
               </div>
          </section>
    </div>
  )
}

export default Home