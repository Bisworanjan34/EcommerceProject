import React, { useContext, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Productitem.css'
import { CartContext } from '../cart/cartContext/CartContext'
import click from '../../audio/audio1.mp3'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { WishlistContext } from '../wishlist.jsx/wishlistContext/WishlistContext'
import wishaudio from '../../audio/waterdrop.mp3'
const Productitem = ({product,addToCart,activeCartId,clr,setClr,additeminCarturl,removeitemFromCartUrl}) => {
  let audioclick=useRef()
  let wishref=useRef()
  let wishaudioRef=useRef()
    const {addCart,setAddCart}=useContext(CartContext)
    const {wishlist,setWishlist}=useContext(WishlistContext)
    const {addwish,setAddwish}=useContext(WishlistContext)
    const {cart,setCart}=useContext(CartContext)
    let {image,title,price,rating,id,category}=product

    let removeCartItem=(item)=>{
      setAddCart(false)
      setClr(cart.find((ite)=>ite.id==product.id))
      setCart(cart.filter((rem)=>rem.id !== item.id))
    }

    let audioclickfun=()=>{
      audioclick.current.play()
      console.log('audio playing')
    }
    let addWishfun=(item)=>{
    let wishid=wishlist.find((w)=>w.id == item.id)
    if(!wishid){
      setWishlist([...wishlist,item])
      wishref.current.style.color='red' 
      console.log('wishlist-added')
    }
    else{
      setWishlist(wishlist.filter((w)=> w.id !== item.id))
      wishref.current.style.color=''
      console.log('wishlist-remove')
    }
      wishaudioRef.current.play()
     
    }
  
  return (
    <div className='main-card-div position-relative 'style={{
      backgroundColor:cart.find((item)=>item.id == product.id) ? clr : ''
    }}>

      <div className="sub-card-item px-3 pt-4 pb-4 shadow border border-info" style={{ width: '16rem', border: 'none' }}>
          <div className="pitem-image-div">
            <img src={image} className="card-img" alt="electronic" height={150} width={150} />
           <div className="wishlist position-absolute top-0 w-100 text-end h3 pe-4 "><FontAwesomeIcon icon={faHeart} onClick={()=>addWishfun(product)} className='addwishlist' ref={wishref}/></div> 
           <audio src={wishaudio} ref={wishaudioRef}></audio>
          </div>
        <Link to={`/productdetails/${product.category}/${product.id}`}>
          <div className="card-body">
            <h5 className="card-title fs-6">{title}</h5>
            <div className="price-rating d-flex w-75 justify-content-between">
              <p className="card-text fs-6 fw-bold m-0"> ${price}</p>
              <p className="card-text fs-6 fw-bold m-0 text-success"> ★★★★{rating.rate}</p>
              <p className="card-text fs-6 m-0 "> {rating.count}views</p>
            </div>
          </div>
        </Link>
        <div className="p-item-btn d-flex gap-1 my-3 mb-0 justify-content-between w-100% " 
        >
         {
           cart.find((item)=>item.id == product.id) ? <button className='btn btn-outline-danger' onClick={()=>{removeCartItem(product)
            audioclickfun()
            // removeitemFromCartUrl()
          }}>remove</button>:

           <button className='px-4 btn btn-outline-danger' style={{ fontSize: '13px' }} onClick={() => { addToCart(product)
            audioclickfun() 
            // additeminCarturl()
           }}>
           Add Cart
         </button> 

       
         }
      

          <Link to={`/buynow/${category}/${id}`}>
            <button className='px-4 btn btn-primary' style={{ fontSize: '13px' }}
            onClick={()=>audioclickfun()}
            >
              Buy Now
            </button>
          </Link>
          <audio src={click} ref={audioclick}></audio>
        </div>
      </div>
    </div>

  )
}

export default Productitem
