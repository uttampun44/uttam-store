import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';
import GradeIcon from '@mui/icons-material/Grade';
import {Add} from '/src/store/action';
import  Product from '/src/Singleproduct/Product'
import { useDispatch } from 'react-redux';

function Sellingproducts({productName, price, quantity, image, realPrice}) {

  const[fav, setFav] = useState(false);
  const [rat, setRatings] = useState(false);

   const dispatch = useDispatch();
    const naviagte =  useNavigate();

  const favIcon = () =>{
    setFav(!fav)
  }

  const ratings = () =>{
     console.log("ratings")
    setRatings(!rat);
  }

  const addCart = (item) =>{
    dispatch(Add(item))
    naviagte(`/addtocart/${item.productName}`)
  }
  return (

         <div className='selling-products-row'>
            <div className='selling-products-img'>
                <img src={image} />
                <div className='fav'>
                <FavoriteIcon style={{position: 'absolute', right: '7%', bottom: '80%', color: fav ? '#DB4444' : '#000', background: '#fff', borderRadius: '4px', padding: '.2vw'}} onClick={favIcon}/>
                </div>
            </div>
            <div className='add-to-cart'>
               <button onClick={() => addCart({productName, price, image, realPrice})}>Add To Cart</button>
            </div>
            <div className='selling-product-description'>
                <p>{productName}</p>
                <p>{price} &nbsp; &nbsp;<span>{realPrice}</span></p>
            </div>
         </div>

  )
}

export default Sellingproducts