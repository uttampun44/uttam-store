import React, { useState } from 'react'
import Header from '../Header/header'
import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import product from '/src/Singleproduct/Product';
import styled from 'styled-components';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Featured from '../Featuredsection/Featured';
import Footer from '../Footer/Footer';
import Sellingproducts from './Sellingproducts';
import Exploreproducts from './Exploreproducts';

function Home() {

    const [selling, setSelling] = useState(product)

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
  
 console.table(selling.slice(5, 9));
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
             
          <Featured />

            <section className='selling-section'>
                  <div className='selling'>
                  <hr></hr>
                     <div className='this-month'>
                         <div className='month-color'>

                         </div>

                        <div className='this-month-title'>
                            <p>This Month</p>
                         </div>
                     </div>

                     <div className='best-selling-products'>
                          <div className='bestselling-title'>
                              <p>Best Selling Products</p>
                          </div>

                          <div className='selling-viewall'>
                              <Link to= '/'>View All</Link>
                          </div>
                       </div>
                       <div className='selling-container'>
                 
                    {
                     selling.slice(4, 8).map( (itemsIndex) =>{
                         
                         return(
                             <Sellingproducts key={itemsIndex.id} {...itemsIndex}/>
                         )
                    })
                 }
               </div>
                  </div>
            </section>
   
               
                  {/* music experience */}

               <section>
                   <div className='music_experience_section'>
                     <div className='music-description-row'>
                          <div className='music-descripton-grid'>
                               <div className='categories'>
                                    <p>Categories</p>
                               </div>

                               <div className='enhance-music'>
                                  <p id='enhance'>Enhance Your Music Experience</p>
                                  <div className='offer_til_valid'>
                                     <div className='days'>
                                       <p id='day_in_number'>05 &nbsp;<span id='day-in-word'>days</span></p>
                                     </div>
                                     <div className='hours'>
                                        <p id='hour_in_number'>23 &nbsp;<span id='hour_in_word'>hours</span></p>
                                        </div>
                                        <div className='minutes'>
                                        <p id='minutes_in_number'>59 &nbsp;<span id='hour_in_word'>minutes</span></p>
                                        </div>
                                        <div className='seconds'>
                                        <p id='seconds_in_number'>35 &nbsp;<span id='second_in_word'>seconds</span></p>
                                        </div>
                                  </div>

                                  <div className='buy-now'>
                                     <Link to='/'>Buy Now</Link>
                                  </div>
                               </div>
                          </div>
                          <div className='music_experience_img'>
                             <img src='/src/assets/jblspeaker_wallpaper.png'/>
                          </div>
                     </div>
                    </div>    
               </section>


               {/* explore our products */}

               <section>
                    <div className='explore-our-products'>
                         
                          <div className='our-products-title-row'>
                                <div className='products-block'>

                                </div>
                                <div className='our-products'>
                                     <p>Our Products</p>
                                </div>
                          </div>

                          <div className='explore-product-heading-row'>
                                <h6>Explore Our Products</h6>

                                <div className='explore-data-grid'>
                                     {
                                        selling.slice(8, 16).map((exploreIndex) =>{
                                            return(
                                                <Exploreproducts key={exploreIndex.id} {...exploreIndex}/>
                                            )
                                        })
                                     }
                                </div>

                                <div className='view-all-exploreproduct'>
                                    <Link to= '/'>View All</Link>
                                </div>
                          </div>
                    </div>
               </section>
                     
                        {/* new arrival section */}
                     <section>
                            <div className='newarrival'>
                                 <div className='arrivalColor'>
                                      <div className='color'>

                                      </div>
                                      <div className='featured'>
                                          <p>Featured</p>
                                      </div>
                                 </div>

                                 <div className='newArrival_heading'>
                                       <h7>New Arrival</h7>
                                 </div>

                                 <div className='newarrival_row'>
                                      <div className='newArrival-flex'>
                                          <img src='/src/assets/ps5.png'/>
                                          <div className='ps-details'>
                                             <p>PlayStation 5</p>
                                             <p>Black and white version of the ps 5 coming out on sale</p>
                                             <Link to='/'>Shop Now</Link>
                                          </div>
                                      </div>
                                      <div className='arrival_grid'>
                                          <div className='womenCollection'>
                                              <img src='/src/assets/attractivewoman.png'/>
                                              <div className='women-collection'>
                                                 <p>Women's Collections</p>
                                                 <p>Featured woman collections that give you another vibe.</p>
                                                 <Link to='/'>Shop Now</Link>
                                              </div>
                                          </div>
                                          <div className='items-row'>
                                              <div className='speakers'>
                                                  <img src='/src/assets/amazonecho.png'/>
                                                  <div className='speakers-description'>
                                                       <p>Speakers</p>
                                                       <p>Amazon wireless speakers</p>
                                                       <Link to='/'>Shop Now</Link>
                                                  </div>
                                              </div>
                                              <div className='perfume'>
                                                  <img src='/src/assets/perfume.png'/>

                                                  <div className='perfume-description'>
                                                      <p>Perfume</p>
                                                      <p>GUCCI INTENSE OUD EDP</p>
                                                      <Link to='/'>Shop Now</Link>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                 </div>
                            </div>
                     </section>

                     <section>
                           <div className='customer-service-row'>
                                 <div className='service'>
                                 <div className='fast-free'>
                                     <img src='/src/assets/freefast.png'/>
                                     <p>Fast and free delivery</p>
                                     <p>Free delivery for all orders $140</p>
                                  </div>
                                  <div className='customer-service'>
                                       <img src='/src/assets/customer.png'/>
                                       <p>24/7 CUSTOMER SERVICE</p>
                                       <p>Friendly 24/7 customer support</p>
                                   </div>
                                   <div className='money-back'>
                                     <img src='/src/assets/moneyback.png'/>
                                     <p>money back guarantee</p>
                                     <p>We return money witin 30days</p>
                                  </div>
                                 </div>
                           </div>
                     </section>
          <Footer />
    </div>
  )
}

export default Home