import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar";
import "./Cart.css";
import { CartContext } from "./cartContext/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faShield } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet, useParams } from "react-router-dom";
import axios from "axios";
const Cart = () => {
  let { cart, setCart } = useContext(CartContext);
 

  
  return (
    // <div>
    //     <Navbar bgcolor={'green'} textcolor={'white'}/>
    //     {cart.length == 0 &&(
    //     <div className='cart-emty-div ' style={{height:'497px'}}>
    //       <div className="emty-cart text-center pt-5">
    //     <FontAwesomeIcon icon={faCartShopping} className='text-warning' style={
    //       {fontSize:'15rem'}
    //     }/>
    //     <h3 className=' text-center text-black-50'> No item in cart</h3>
    //    <Link to='/products'> <button className='btn btn-outline-success mx-5 text-center'>shopping now.....</button></Link>
    //     </div>
    //     </div>
    //     )}

    //     <div className="row cart-main-div d-flex justify-content-around w-100">
    //     <div className=" col-8 cart.sub-div bg-light ">
    // {
    //   cart.length >0 && cart.map((c,i)=>{
    //     return(
    //       <>
    //       <div key={i} className="cart mb-2 d-flex shadow px-3 gap-2 flex-wrap mt-2" style={{width:'100%',height:'150px',background:'white'}}>

    //                                 <img src={c.image} className=" align-self-center ms-2 me-3 " alt="image" style={{height:'80px',width:'90px'}}/>

    //                                     <div className="cart-body mt-4" style={{width:'50%',height:'100px'}}>
    //                                         <p className="card-title fs-6">{c.title}</p>
    //                                         <div className="price-rating d-flex w-50 justify-content-between ">
    //                                         <p className="card-text fs-6 fw-bold"> ₹{c.price}</p>
    //                                         <p className='text-secondary  text-decoration-line-through'>₹{c.price+50}</p>
    //                                         <p className='text-success'>₹{(c.price+50)-(c.price)} off</p>

    //                                         </div>
    //                                         <p>Flipkart Assured</p>

    //                                         <div className="cart-btn-div d-flex gap-2 w-100 mt-1 ">
    //                                           <p className=''>SAVE FOR LATER</p>
    //                                           <b className='tred ms-3 '
    //                                           onClick={()=>removeCartitem(c.id)}
    //                                           >Remove</b>
    //                                         </div>
    //                                     </div>
    //                                     </div>
    //       </>
    //     )
    //   })
    // }
    // </div>

    // {/* --------------price-details---------------- */}

    //   <div className="col-3 p-0 ">
    //     <div className="row ">
    //       <div className="col p-2">
    //         <b>PRICE DETAILS</b>
    //       </div>
    //     </div>
    //     <div className="row">
    //       <div className="col-8">
    //         <p className='my-2'>Price({cart.length} items)</p>
    //         <p className='my-2'>Discount</p>
    //         <p className='my-2'>Coupons for you</p>
    //         <p className='my-2'>Sequered Packaging Fee</p>
    //         <p className='my-2'>Delivery Charges</p>
    //         <b className='my-2'>TOTAL AMOUNT</b>
    //         <p className='my-2'>you will ssave on this order {}</p>
    //       </div>
    //       <div className="my-2  col-4 ps-5 ">
    //        <p className='my-2 '> ₹{totalPrice}</p>
    //        <p className='my-2 tgreen'>-₹{newPrice}</p>
    //        <p className='my-2 tgreen'>₹0</p>
    //        <p className='my-2 '>₹0</p>
    //        <p className='my-2 tgreen'>₹{deliveryCharges}</p>
    //        <b className='my-2 '>{newPrice + deliveryCharges}</b>
    //        </div>
    //     </div>
    //   </div>

    // </div>
    // </div>
    <>
      <Navbar bgcolor={"green"} textcolor={"white"} />
      <div className="container-fluid">
        {cart.length === 0 && (
          <div
            className="cart-emty-div d-flex justify-content-center align-items-center"
            style={{ height: "497px" }}
          >
            <div className="emty-cart text-center pt-5">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-warning"
                style={{ fontSize: "15rem" }}
              />
              <h3 className="text-center text-black-50">No item in cart</h3>
              <Link to="/products">
                <button className="btn btn-outline-success mx-5 text-center">
                  Shopping now...
                </button>
              </Link>
            </div>
          </div>
        )}

        {
          cart.length > 0 && 
          <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 py-2 border text-center bg-primary text-white">
              <Link to={'flipkartcart'}><b className="text-white">Flipkart</b></Link>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 py-2 text-center border green ">
              <Link to={'grocerycart'}><b className="text-white">Grocery</b></Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Outlet/>
            </div>
          </div>
        </div>

        }

       
      </div>
    </>
  );
};

export default Cart;
