import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function header() {
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
                                 <li><a>Home</a></li>
                                 <li><a>Contact</a></li>
                                 <li><a>About</a></li>
                                 <li><a>Singup</a></li>
                            </ul>
                    </div>
                    
                    <div className='search-cart'>
                           <div className='search-items'>
                                <input type="text" placeholder='What are you looking for ?'/><SearchIcon />
                           </div>

                           <div className='cart-whistlist'>
                                 <FavoriteIcon />
                                 <ShoppingCartIcon />
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