import React from 'react'
import Header from '../Header/header'
import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

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
                          <h3>Today's</h3>
                    </div>
                    <div className='flash-sales-section'>
                        <div className='flash-sales'>
                             <h4>Flash sales</h4>
                        </div>
                        <div className='time'>

                        </div>
                        <div className='sales-slider'>

                        </div>
                    </div>
               </div>
          </section>
    </div>
  )
}

export default Home