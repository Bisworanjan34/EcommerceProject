import React, { useContext } from 'react'
import { CartContext } from '../cartContext/CartContext';
import './FlipkartCart.css'
const FlipkartCart = () => {

    const {cart,setCart}=useContext(CartContext)

    let removeCartitem=(id)=>{
        setCart(cart.filter((f)=>f.id !== id))
    }

    const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0);
    const newPrice = totalPrice - totalPrice * 0.1;
    const deliveryCharges = 64;
    const savings = totalPrice * 0.1;
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-8 col-md-12 col-sm-12 overflow-auto" style={{height:'100vh'}}>
                {cart.length > 0 &&
              cart.map((c, i) => {
                return (
                  <div
                    key={i}
                    className="cart mb-2 d-flex shadow px-3 gap-2 flex-wrap mt-2"
                    style={{
                      width: "100%",
                      height: "150px",
                      background: "white",
                    }}
                  >
                    <img
                      src={c.image}
                      className="align-self-center ms-2 me-3"
                      alt="image"
                      style={{ height: "80px", width: "90px" }}
                    />
                    <div
                      className="cart-body mt-4 "
                      style={{ width: "80%", height: "100px" }}
                    >
                      <p className="card-title fs-6">{c.title}</p>
                      <div className="price-rating d-flex w-50 justify-content-between">
                        <p className="card-text fs-6 fw-bold">₹{c.price}</p>
                        <p className="text-secondary text-decoration-line-through">
                          ₹{c.price + 50}
                        </p>
                        <p className="text-success">
                          ₹{c.price + 50 - c.price} off
                        </p>
                      </div>
                      <p>Flipkart Assured</p>
                      <div className="cart-btn-div d-flex gap-2 w-100 mt-1">
                        <p className="">SAVE FOR LATER</p>
                        <b
                          className=" ms-3"
                          onClick={() => removeCartitem(c.id)}
                        >
                          Remove
                        </b>
                      </div>
                    </div>
                  </div>
                );
              })}
                </div>
                    {/* payments-------------- */}
                <div className="col-lg-4 col-md-12 col-sm-12 ">
                {cart.length > 0 && (
            <div className="col-lg-12 col-md-12 col-sm-12 p-0 ">
              <div className="row">
                <div className="col p-2">
                  <b>PRICE DETAILS</b>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <p className="my-2">Price({cart.length} items)</p>
                  <p className="my-2">Discount</p>
                  <p className="my-2">Coupons for you</p>
                  <p className="my-2">Sequered Packaging Fee</p>
                  <p className="my-2">Delivery Charges</p>
                  <b className="my-2">TOTAL AMOUNT</b>
                  <p className="my-2">You will save on this order ₹{savings}</p>
                </div>
                <div className="my-2 col-4 ps-5">
                  <p className="my-2 "> ₹{totalPrice}</p>
                  <p className="my-2 tgreen">₹{newPrice}</p>
                  <p className="my-2 tgreen">₹0</p>
                  <p className="my-2 ">₹0</p>
                  <p className="my-2 tgreen">₹{deliveryCharges}</p>
                  <b className="my-2 ">{newPrice + deliveryCharges}</b>
                </div>
              </div>
            </div>
          )}
                </div>
            </div>
        </div>
     
    </div>
  )
}

export default FlipkartCart
