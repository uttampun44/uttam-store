import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { Delete } from '../../store/action';

function Addtocart() {

  const getItems = useSelector((state) => state.cart.carts);
 

  const [price, setPrice] = useState(0);
  const [itemprice, setItemprice] = useState(0)

  const deleteCart = useDispatch();

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

  const totalPrice = () =>{
    let productPrice = 0;
      getItems.map((singlePrice) =>{
        console.log(singlePrice.price)
         productPrice = singlePrice.price + productPrice;

      })
      setItemprice(productPrice)
  }

  useEffect(() =>{
    totalPrice();
  }, [totalPrice])

  const removeCart = (id) =>{
     console.log("remove cart")
     deleteCart(Delete(id))
   }

  return (
    <div>
        <Header />
        <section>
             <div className='addtocart-container'>
                <div className='cart-details-row'>
                    <div className='product'><p>Product</p></div>
                    <div className='price'><p>Price</p></div>
                    <div className='subtotal'><p>Subtotal</p></div>
                    <div className='quantity'><p>Remove Item</p></div>
                </div>

                  <div>
                  {
                  getItems.map((productCart) =>{
                     return(
                      <div className='cartItems-display-row' key={productCart.id}>
                      <div className='cartImage'><img src= {productCart.image} style={{width: '30%'}}/></div>
                      <div className='cartPrice'><p>${productCart.price}</p></div>
                       <div className='cartSubtotal'><p>${productCart.price}</p></div>
                       <div className='deleteIcon'> <DeleteIcon onClick={() => removeCart(productCart.id)} style={{cursor: 'pointer', color: '#DB4444'}}/></div>
                 </div>
                     )
                  })
                }
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
                                     <span>Subtotal</span> <span>${itemprice}</span>
                                  </div>
                                  <div className='shipping'>
                                       <span>Shipping</span> <span>Free</span>
                                  </div>
                                  <div className='total'>
                                      <span>Total:</span> <span>${itemprice}</span>
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