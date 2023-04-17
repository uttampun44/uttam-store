import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Add } from '../../store/action';

function Exploreproducts({productName, price, quantity, image, realPrice, id}) {

   const [favColor, setColor] = useState(false)
  const favouriteIcon= () =>{
     setColor(!favColor)
  }
  const dispatch = useDispatch();
   const naviagte = useNavigate();

  //  add to cart functionality
  const addCart = (e) =>{
    dispatch(Add(e))
    naviagte(`/addtocart/${e.productName}`)
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
               <button onClick={() => addCart({productName, price, image, realPrice})} >Add To Cart</button>
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