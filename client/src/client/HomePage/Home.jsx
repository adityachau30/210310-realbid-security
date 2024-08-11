import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import { FaBeer } from 'react-icons/fa';
import { MdSecurity  , MdEventAvailable} from 'react-icons/md';


import Img from "../images/values-1.png";
import Img4 from "../images/arrow-310633_960_720.png";
import BidImg from "../images/values-3.png";
import Auction1 from "../images/auction1.png";

import "./homestyle.scss";
import MetaData from '../MetaData/MetaData';
import Product from "./Product";
import {getProduct} from "../../actions/productAction";
import {useSelector , useDispatch} from "react-redux";
import Loader from '../Loader/Loader';
import { useAlert } from 'react-alert';


// const product = {
//   name: "Blue Tshirt",
//   images: [{url : "https://image.shutterstock.com/image-vector/compatibility-testing-concept-icon-checking-600w-1498931552.jpg"}],
//   price: "rs.5000",
//   _id:"nihal",
  
// };

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const {loading , error , products , productCount} = useSelector(
(state) => state.products
  );

useEffect(() => {
  

  if(error){
    return alert.error(error);
  }
dispatch(getProduct());
  
}, [dispatch , error , alert]);

// console.log(productCount);
  return (
    <>{loading ? (<Loader/>) :(
    <>
    <MetaData title="BEST BID"></MetaData>
      <section id='header' className='d-flex align-items-center homepg'>


        <div className="container-fluid nav_bg">
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row'>
              <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column' data-aos="fade-up" data-aos-delay="300">
                <h1> Bid and sell property with <strong className='brand-name'><br/>Online Auction</strong></h1>

                <h2 className="my-3">
                  An online auction is a service in which auction users or participants sell or bid for property via the Internet.
                </h2>
                <div className='mt-3'>
                  <NavLink to="/lot" className='btn-get-started'>
                    Get Started
                  </NavLink>
                </div>

              </div>

              <div className='col-lg-6 order-1 order-lg-2 header-img ' data-aos="fade-up" data-aos-delay="400">
                  <img src={Auction1} className='img-fluid animated hedrimg' alt="auction img" />

              </div>
              </div>

            </div>
          </div>
        </div>


      </section>







      {/* Home Section 2 */}




{/* FEATURED PRODUCT */}

<section className="product_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
      <div className="section-title" data-aos="fade-up">
          <h2>Featured Auctions</h2>
          <p>Start Bidding Now!</p>
        </div>

      </div>
      <div className="row">

{products && products.map(product => (
  <Product product = {product} />
))}





        
        
      </div>
      <div className="btn_box">
        <NavLink excat to={"/lot"} className="view_more-link">
          View More
        </NavLink>
      </div>
    </div>
  </section>







    </>
    ) }</>
    
    );
};

export default Home;
