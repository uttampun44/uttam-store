import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

function Exploreproducts({productName, price, quantity, image, realPrice}) {
  
   const [favColor, setColor] = useState(false)
  const favouriteIcon= () =>{
     setColor(!favColor)
  }
  return (
    <div>
         <div className='exploreproduct-grid'>
             <div className='exploreproduct-img'>
                 <img src= {image}/>

                 <div className='product-favourite'>
                      <FavoriteIcon style={{position: 'absolute', right: '7%', bottom: '80%', color: favColor ? '#DB4444' : '#000', background: '#fff', borderRadius: '4px', padding: '.2vw'}} onClick={favouriteIcon}/>
                 </div>
             </div>

             <div className='add-to-cart'>
               <Link to='/addtocart'>Add To Cart</Link>
             </div>

             <div className='explore-product-details'>
                <p>{productName}</p>
                <p>{price} &nbsp; &nbsp;<span>{realPrice}</span></p>
             </div>
         </div>
    </div>
  )
}

export default Exploreproducts