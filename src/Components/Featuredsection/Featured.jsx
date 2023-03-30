import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ComputerIcon from '@mui/icons-material/Computer';
import WatchIcon from '@mui/icons-material/Watch';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

function Featured() {

//     const responsive = {
//        desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     slidesToSlide: 3 // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     slidesToSlide: 2 // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1 // optional, default to 1.
//   }
//       };

const imgSize = {
    width: '55px',
    height: '55px',
    ObjectFit: 'fill',
}

  return (
   <section>
          <div className='categories'>
              <div className='browse-category'>
                  <div className='color-categories'></div>
                  <div><h3>Categories</h3></div>
              </div>

              <div className='category-slider'>
                    <div className='category-title'>
                         <h4>Browse By Category</h4>
                    </div>
              </div>

              <div className='category-carousel'>

                     <div className='android-phone'>
                             <PhoneAndroidIcon style={imgSize}/>
                              <p>Phones</p>
                          </div> 

                          <div className='computers'>
                               <ComputerIcon style={imgSize}/>
                               <p>Laptops</p>
                          </div>

                          <div className='smart-phone'>
                                <WatchIcon style={imgSize}/>
                                <p>Watch</p>
                          </div>

                          <div className='camera'>
                                <PhotoCameraIcon style={imgSize}/>
                                <p>Camera</p>
                          </div>

                          <div className='headphone'>
                                 <HeadphonesIcon style={imgSize}/>
                                 <p>Headphones</p>
                          </div>

                          <div className='sports'>
                                <SportsEsportsIcon style={imgSize}/>
                                <p>Gaming</p>
                          </div>
              </div>
          </div>
   </section>
   
  )
}

export default Featured