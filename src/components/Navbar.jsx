import React, { useContext, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBorderStyle, faCartShopping, faClover, faHeart, faPeopleArrows, faPerson, faSmile } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from './cart/cartContext/CartContext'
import { LoginContext } from './login/loginContext/LoginContext'
import lifestyle from '../images/lifestyle.png'
import './Navbar.css'
import { WishlistContext } from './wishlist.jsx/wishlistContext/WishlistContext'
const Navbar = ({ bgcolor, textcolor }) => {
  let {cart,setCart}=useContext(CartContext)
  let [searchQuery, setSearchquery] = useSearchParams()
  let {login,setLogin}=useContext(LoginContext)
  let {wishlist,setWishlist}=useContext(WishlistContext)
  let addqueryparams = () => {
    setSearchquery({
      name: 'product',
      qulity: 'A1'
    })
  }
  return (
    <>

      <nav className="navbar justify-content-center gap-3 position-sticky top-0 z-3" style={{ background: bgcolor }}>
        <div className="navlogo logo ">
        <h5 className='fw-bold m-0 fst-italic 'style={{ color: textcolor }}>Lifestyle</h5>
     
        <p className='mt-1 p-0'style={{ color: textcolor }}>online shopping</p>
        </div>
        <Link to={'/'}><h5 style={{ color: textcolor }}>Home</h5></Link>
       
        <Link to={'/grocery'}><h5 style={{ color: textcolor }}>Grocery</h5></Link>
        <Link to={''}><h5 style={{ color: textcolor }}>Contact</h5></Link>
        <Link to={''}><h5 style={{ color: textcolor }}>service</h5></Link>


        <div class="dropdown"style={{marginTop:'-8px'}}>
          <a class=" dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: textcolor }}>
            Profile
          </a>

          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href=" " onClick={addqueryparams}>Addparams</a></li>
            <li><a class="dropdown-item" href="" onClick={() => setSearchquery(
              { name: 'fashion', quality:'A2' }
            )}>Updateparams</a></li>
            <Link to={`/wishlist?name=wishlist`}><li className=''><a class="dropdown-item position-relative" href="">wish List 
            <span class="position-absolute top-2 start-50 ms-4 mt-2 translate-middle badge rounded-pill bg-danger">
             {wishlist.length}
             <span class="visually-hidden">unread messages</span>
           </span>
              
              
              
              </a></li></Link>
            <li><a class="dropdown-item" href="#">setting</a></li>
            <li><a class="dropdown-item" href="#">help</a></li>
            {
              login&&(
               <li><a class="dropdown-item" href="/" 
               onClick={()=>setLogin(false)}>Logout</a></li>
              )            
            }
          </ul>
        </div>
         <div className='position-relative'>       
           <Link to={'/cart'}>  <h5 style={{ color: textcolor }}>
          <FontAwesomeIcon icon={faCartShopping} className='' />
          Cart
          <span class="position-absolute top-2 start-100 ms-2 translate-middle badge rounded-pill bg-danger">
            {cart.length}
            <span class="visually-hidden">unread messages</span>
          </span>
        </h5></Link></div>


        <Link to={'/wishlist'}> <h5 style={{ color: textcolor }} className='position-relative'>
          {/* <FontAwesomeIcon icon={faHeart} className='text-danger' /> */}
          WshList
          <span class="position-absolute top-2 start-100 ms-2 translate-middle badge rounded-pill bg-danger">
             {wishlist.length}
             <span class="visually-hidden">unread messages</span>
           </span>
          </h5></Link>
            {
              login&&(

                <Link to='/'><p className=' px-4 logoutbtn' onClick={()=>{
                  setLogin(false)
                }} style={{marginTop:'-7px',color:textcolor}}> <p>logout</p> </p></Link>
              )
            }

      </nav>





    </>

  )
}

export default Navbar
