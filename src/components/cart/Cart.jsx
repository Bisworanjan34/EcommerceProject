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
