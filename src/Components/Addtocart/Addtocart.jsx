import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';

function Addtocart() {

  const [price, setPrice] = useState(0)
  const increment = () =>{
     setPrice(price + 1)
    console.log(price);
  }
  const decrement = () =>{
  
    if(price < 1){
      return price;
    }else{
      setPrice(price - 1)
    }
    console.log(price)
  }
  return (
    <div>
        <Header />
        <section>
             <div className='addtocart-container'>
                <div className='cart-details-row'>
                    <div className='product'><p>Product</p></div>
                    <div className='price'><p>Price</p></div>
                    <div className='quantity'><p>Quantity</p></div>
                    <div className='subtotal'><p>Subtotal</p></div>
                </div>

                <div className='cartItems-display-row'>
                     <div className='cartImage'><img src='/src/assets/breedfoog.png' style={{width: '30%'}}/></div>
                     <div className='cartPrice'><p>$650</p></div>
                     <div className='CartQuantity'>
                         <div className='quantity'> <span>{price}</span></div>
                      <div className='incrementdecrement'>
                         <div className='increment'>
                             <KeyboardArrowUpIcon onClick={increment}/>
                         </div>
                         <div className='decrement'>
                           <KeyboardArrowDownIcon onClick={decrement}/>
                         </div>
                      </div>
                      </div>
                      <div className='cartSubtotal'><p>$650</p></div>
                </div>

                {/* carttotal container */}
                    <div className='carttotal-container'>
                          <div className='applyCoupon'>
                              <input type="text" placeholder='Coupon Code'/>
                              <button>Apply Coupon</button>
                          </div>
                          <div className='cartTotal'>
                             <p>Cart Total</p>
                             <div className='totalRow'>
                                  <div className='subtotal'>
                                     <span>Subtotal</span> <span>$170</span>
                                  </div>
                                  <div className='shipping'>
                                       <span>Shipping</span> <span>Free</span>
                                  </div>
                                  <div className='total'>
                                      <span>Total:</span> <span>$170</span>
                                  </div>
                             </div>
                             <div className='checkout'>
                                <Link to='/checkout'>Proceed to checkout</Link>
                             </div>
                          </div>
                    </div>
             </div>
        </section>
        <Footer />
    </div>
  )
}

export default Addtocart