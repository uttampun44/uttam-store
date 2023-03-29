import React, { useState } from 'react'
import Header from '../Header/header'
import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import product from '../../Singleproduct/Product';
import styled from 'styled-components';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Home() {


const Button =styled(Link)`
    
    font-weigth: 500;
    text-align: center;
    color: #fff;
    background-color: ${props => props.primary ? "#000" : "#DB4444"};
    font-style: normal;
    width: 100%;
    text-decoration: none;
    text-align: center;
    line-height: 24px;
    font-size 1rem;
`;

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
                                  {

                                    product.slice(0, 4).map((singleItem) =>{
                                        return(
                                            <div key={singleItem.id}>
                                                  <div className='singleproduct'>
                                                       <div className='product-details'>
                                                            <div className='product-image'>
                                                                 <img src={singleItem.image}/>
                                                                 <div className='whistlist'>
                                                                     <FavoriteIcon style={{color: '#DB4444',}}/>
                                                                 </div>
                                                            </div>

                                                            <div className='addto-cart'>
                                                              
                                                              <Button primary to='/addtocart'>Add To Cart</Button>
                                                            </div>
                                                            <div className='description'>
                                                                 <p>{singleItem.productName}</p>
                                                            </div>
                                                            <div className='price'>
                                                                  <p>{singleItem.price} &nbsp; &nbsp;<span>{singleItem.realPrice}</span></p>
                                                                  <p>{singleItem.ratings}</p>
                                                            </div>
                                                       </div>
                                                  </div>
                                            </div>
                                        )
                                    })
                                  }
                        </div>
                        <div className='view-products'>
                            <Button to='/addtocart'>View All Products</Button>
                        </div>
               </div>
          </section>
    </div>
  )
}

export default Home