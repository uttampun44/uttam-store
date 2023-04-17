import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function header() {

   const cartStyle= {
      position: 'relative',
      right: '30px',
      top: '10px',
   }
   const cartItems = useSelector((state) => state.cart.carts)

  return (
    <div>
        <div className='header-top'>
                <div className='header-sales'>
                   <div class="shop-now">
                         <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span> ShopNow</span></p> 
                    </div>
            
                 <div className='select-language'>
                     <select>
                          <option>English </option>
                          <option>French </option>
                      </select>
                   </div>
                </div>
         </div>

      <header>
            <nav>
                <div className='nav'>
                   <div class="store-header">
                     <div className='heading'>
                        <h1>Uttam Store</h1>
                    </div>
                    
                    <div className='home-contact-signup'>
                            <ul>
                                 <li><Link to='/'>Home</Link></li>
                                 <li><Link to='/contact'>Contact</Link></li>
                                 <li><Link to='/about'>About</Link></li>
                                 <li><Link to='/signup'>Signup</Link></li>
                            </ul>
                    </div>
                    
                    <div className='search-cart'>
                           <div className='search-items'>
                                <input type="text" placeholder='What are you looking for ?'/><SearchIcon style={cartStyle}/>
                           </div>

                           <div className='cart-whistlist'>
                                 <FavoriteIcon />
                              <div className='shopping-cartNumber'>
                                  <ShoppingCartIcon /><span>{cartItems.length}</span>
                              </div>
                           </div>
                     </div>
                   </div>
                </div>
             </nav>
       </header>
    </div>
  )
}

export default header