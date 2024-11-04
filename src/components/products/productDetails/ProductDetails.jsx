import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../../Navbar'
import './ProductDetails.css'
import { CartContext } from '../../cart/cartContext/CartContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductDetails = () => {
    const {addCart,setAddCart}=useContext(CartContext)
    const { id } = useParams()
    const {cart,setCart}=useContext(CartContext)
    let [state, setState] = useState({
        image: '', title: '', price: '', rating: '', description: '',category:''
    })

    useEffect(()=>{
        axios.get(`http://localhost:3000/products/${id}`)
        .then((res)=>{setState(res.data)
            // console.log(res.data)
        })
    },[id])

    let addToCart = (state) => {
        setCart([...cart, state])
        setAddCart(true)
        // console.log(cart)
        toast.success('🦄 item is added on cart!', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            // transition: Bounce,
        });
    }

    let removeCartItem=()=>{
        setAddCart(false)
        setCart([])
    }
    return (
        <>
         <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            // transition:Bounce

            />
        <Navbar/>
        <div>
            {/* <h2> product-details={id} </h2> */}
            <div className="product-details-div d-flex justify-content-center gap-5 pt-4">
                
            <div className="card shadow p-3"style={{width:'400px',height:'430px'}}>
                <img src={state.image} className="card-img-top my-auto h-100" alt="electronic"
                
                    />
                
            </div>
            {/* ---------------product-body-------- */}
            <div className="product-details-body w-50  text-dark min-vh-100 p-3 ">
            <div className="card-body min-vh-100 ">
                    <h5 className="card-title fs-3 fw-bold text-start">{state.title}</h5>
                    <div className="price-rating d-flex w-50 justify-content-between pt-2">
                        <p className="card-text fs-4 fw-bold"> ${state.price}</p>
                        <p className="card-text fs-6 fw-bold text-primary"> ★★★{state.rating.rate}</p>
                        <p className="card-text fs-6 "> {state.rating.count}views</p>
                    </div>

                    <p className='text-start  '>{state.description}</p>

                    <div className="product-d-btn d-flex justify-content-lg-start gap-3">

                   {
                    addCart ? <button className='btn btn-danger' onClick={removeCartItem}>remove-item</button>:
                    <button className="btn  btn-outline-danger px-5"
                    onClick={()=>{addToCart(state)}}
                    >Addtocart</button>
                   }


                   <Link to={`/buynow/${state.category}/${id}`}> <button className="btn btn-primary px-5">Buynow</button></Link>
                </div>
                    </div>
            </div>

                </div>
        </div>
        </>
    )
}

export default ProductDetails
