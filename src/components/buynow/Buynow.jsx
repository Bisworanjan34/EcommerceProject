import React, { useEffect, useState } from 'react'
import './Buynow.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Productitem from '../products/Productitem'
import './Buynow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCoins, faConciergeBell, faShield } from '@fortawesome/free-solid-svg-icons'
import { height } from '@fortawesome/free-solid-svg-icons/fa0'
import { faSquareCaretUp } from '@fortawesome/free-solid-svg-icons/faSquareCaretUp'
const Buynow = () => {
    let {id}=useParams()
    let [state,setState]=useState({
        image:'',title:'',price:'',rating:'',
    })
    useEffect(()=>{
        axios.get(`http://localhost:3000/products/${id}`)
        .then((res)=>setState(res.data))
    },[id])
  return (
    <div>
      {/* <p className='text-center'> Buy Now Component {id}</p> */}
     <div className="buynow-nav w-100 bg-primary text-light d-flex align-items-center position-sticky top-0"style={{height:'60px'}}>
        <h5 className='ms-3 fw-bold fst-italic'>Lifestyle</h5>
     </div>

    <div className="buynow-main-div w-100  d-flex gap-2 px-3 pt-3">
        <div className="buynow-details w-75 border overflow-scroll">
            <div className="buy-login border mb-3 white w-100 d-flex justify-content-between px-5 align-items-center"style={{height:'100px'}}>
                <div className=''>
                    <p>LOGIN <FontAwesomeIcon icon={faCheckCircle} className='tgreen'/></p>
                    <p className='fw-bold'>Bisworanjan  <span className='fw-normal'>+918915367258</span></p>
                </div>
                <div>
                <button className='btn btn-outline-primary px-16'> CHANGE</button>
                </div>

            </div>


            <div className="buy-address border white w-100"style={{height:'100px'}}>
            <div className="buy-adrs border mb-3 white w-100 d-flex justify-content-between px-5 align-items-center"style={{height:'100px'}}>
                <div className=''>
                    <p>DELIVERY ADDRESS <FontAwesomeIcon icon={faCheckCircle} className='tgreen'/></p>
                    <p className='fw-bold'>Bisworanjan  <span className='fw-normal'>Quality thought near metro station ,5783284,hyderabad-telengana <span>500016</span></span></p>
                </div>
                <div>
                <button className='btn btn-outline-primary px-16'> CHANGE</button>
                </div>
            </div>
                <div className="ordersummry border bg-primary w-100"style={{height:'50px'}}>
                        <p className='ms-4 fw-bold text-light mt-2 pt-1'>ORDER SUMMARY</p>
                </div>
{/* ---------------------------supercoin */}
                <div className="buy-super-con">
                <div className="buy-login border mb-3 white w-100 d-flex justify-content-between px-5 align-items-center"style={{height:'100px'}}>
                <div className=''>
                    <p className='mt-3 mb-0'>PAY USING SUPER COIN<FontAwesomeIcon icon={faCheckCircle} className='tgreen'/></p>
                    <p className='fw-bold m-0'>Balance  <span className='fw-normal'>
                        <FontAwesomeIcon icon={faCoins} className='text-warning' />
                        9999</span></p>
                        <p className='tgreen m-0'>save ₹75 using 75 super coins</p>
                </div>
                <div>
                <button className='btn btn-primary fw-bold' style={{width:'100px'}}> APPLY</button>
                </div>

            </div>
                </div>

                <div className="update-div w-100 bg-warning " style={{height:'40px'}}>
                    <p className='pt-2 ms-5'>successfully update of {state.title}</p>
                </div>

                <div className="show-item shadow container white py-3">
                    <div className="row">
                        <div className="col-8">
                           <div className="row">
                            <div className="col-4">
                            <img src={state.image} alt="" width={100} className='ms-5'/>
                            </div>
                            <div className="col-8">
                            <p>{state.title}</p>
                            <h5 className='fw-bold'> ₹{state.price}</h5>
                            <p> ⭐⭐⭐⭐{state.rating.rate}</p>
                            <p className='tgreen'>offer 50% OFF including</p>
                            </div>
                           </div>
                        </div>
                        <div className="col-4">
                           <input type="radio"  name='delivery'/> delivery by tomorrow <br />
                           <input type="radio" name='delivery' /> delivery by 2 days <br />
                           <p>open box delivery available in this product </p>
                        </div>

                    <div className="row">
                       <div className="col-12 ps-4 py-3">
                       <input type="checkbox" /> use GST invoice
                       </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <p>order conformation email will be send <b>bisworanjan34@gmail.com</b></p>
                        </div>
                        <div className="col-4">
                            <button className='btn btn-danger px-5 py-2'>CONTINUE</button>
                        </div>
                    </div>

                    {/* --------------payment option------------ */}
                    <div className="row">
                        <div className="col-12 deepwht p-3">
                           <span className='fw-bold bg-white py-2 px-3 border'>4</span> <b>PAYMENT OPTIONS</b>
                        </div>
                    </div>
                    </div>
                </div>

        </div>
    </div>
        {/* ----------------------payment-details=----------- */}
        <div className="buynow-payment  border white p-3" style={{height:'300px'}}>
            <b>PRICE DETAILS</b>
            <div className='p-item w-100 d-flex justify-content-between'>
                <p>Price item </p>
                <p>₹{state.price}</p>  
            </div>
            <div className="delivery-crg d-flex justify-content-between">
            <p className=''>Delivery Charges</p>
            <p className='text-secondary'><span className='text-secondary text-decoration-line-through'>₹75</span><span className='tgreen'> FREE</span></p>
            </div>
          <div className="t-payble d-flex justify-content-between">
          <h5 className='fw-bold'>Total Payble</h5>
          <p className='fw-bold'>₹{state.price}</p>
          </div>
          <div className="t-saving">
            <b className='tgreen py-3'>Your totla saving in this order ₹{state.price*3}</b>
          </div>
          <div className="secure-payment container-fluid pt-4 ">
            <div className="row">
                <div className="col">
                    <FontAwesomeIcon icon={faShield}/>
                    <p>safe and payment easy returns 100% athentic products</p>
                </div>
            </div>

        </div>
        </div>


     
    </div>
    
   
    </div>
  )
}

export default Buynow
