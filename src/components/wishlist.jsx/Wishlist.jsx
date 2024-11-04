import React, { useContext } from 'react'
import './Wishlist.css'
import Navbar from '../Navbar'
import { WishlistContext } from './wishlistContext/WishlistContext'
import { Link } from 'react-router-dom'
import profile from '../../images/menprofesion.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faHeart, faTrash, faUserLarge, faWallet } from '@fortawesome/free-solid-svg-icons'
const Wishlist = () => {

  let {wishlist,setWishlist}=useContext(WishlistContext)
  console.log(wishlist)

  let removeWishlist=(id)=>{
     setWishlist(wishlist.filter((f)=>f.id !== id))
  }
  return (
    // <div>
    //     <Navbar bgcolor={'blue'} textcolor={'white'}/>
    //     <div className='container-fluid deepwht '>
    // <div className="row mh-100 justify-content-center gap-3 pt-3">
   
    //   <div className="col-3  ">
    //     <div className="row white p-3 mb-2 shadow">
    //      <div className="col-3">
    //       <img src={profile} alt="img" height={50} width={60} />
    //      </div>
    //      <div className="col-9">
    //       <p>hello</p>
    //       <b >Bisworanjan</b>
    //      </div>
    //     </div>
    //     <div className="row white shadow p-3">
    //       <b className='mb-3 text-bg-primary py-2'> <FontAwesomeIcon icon={faFile} className='me-2 '/> MY ORDERS</b>
    //       <b className='text-bg-primary py-2'><FontAwesomeIcon icon={faUserLarge} className='me-2 '/>ACCOUNT SETTINGS </b>
    //         <div className='ms-5 mt-3'>
    //           <p className='mb-2'>Profile information</p>
    //           <p className='mb-2'>Manage Addresses</p>
    //           <p className='mb-2'>PAN Card information</p>
    //         </div>
        

    //       <b className='mb-3 text-bg-primary py-2'> <FontAwesomeIcon icon={faMoneyCheck} className='me-2 '/> PAYMENTS</b>
         
    //         <div className='ms-5 mt-3'>
    //           <p className='mb-2 '>Gift Cart <span className='ms-5 ps-5'>$0</span></p>
    //           <p className='mb-2'>Save upi</p>
    //           <p className='mb-2'>Save Cad</p>
    //         </div>
    //     </div>
    //   </div>

    //   <div className="col-8 wish-item-col white shadow overflow-y-scroll" style={{height:'460px'}}>
    //      <div className="row">
    //       <b className='p-3 ms-2 border-bottom border-2'>My Wishlist ({wishlist.length}) </b>
    //      </div>
    //      <div className="row p-3">
    //      {
    //       wishlist.length > 0 ? wishlist.map((w)=>{
    //         return(
    //           <div className="row wishlist-items py-4 border-bottom">
    //           <div className="col-3">
    //             <img src={w.image} alt="img" height={80} width={100}className='ms-4'/>
    //           </div>
    //           <div className="col-7">
    //             <p>{w.title}</p>
    //             <div> <span className='green px-2 py-1 rounded text-white'>{w.rating.rate}</span>⭐⭐⭐⭐   <span>({w.rating.count})</span></div>
    //             <h2 className='h5 fw-bold mt-3'> ₹{w.price} 
    //               <span className='fw-normal fs-6 ms-3 text-secondary text-decoration-line-through'>{w.price* 2}</span> 
    //               <span className='fw-normal fs-6 ms-3 tgreen'> 75% OFF</span>
    //               </h2>
    //           </div>
    //           <div className="col-2 ">
    //             <button className='btn btn-outline-danger mt-4 px-3' onClick={()=>removeWishlist(w.id)}>
    //               <FontAwesomeIcon icon={faTrash} className='me-2 '/>
    //               Delete</button>
    //           </div>
    //          </div>
    //         )
    //       }) :
    //     // ----------------------empty-wishlist---------------

    //     <div className="empty-wishlist text-center  mt-5 pt-2" style={{height:'200px'}} >
    //       <FontAwesomeIcon icon={faHeart} className='display-1 text-secondary'/><br />
    //       <Link to={'/products'}>
    //       <button className='btn btn-outline-primary'>Shopping now....</button>
    //       </Link>
    //     </div>
          
    //      }
    //      </div>
    //   </div>
    // </div>

    //     </div>
     
     
    // </div>

    <div>
    <Navbar bgcolor={'blue'} textcolor={'white'} />
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div className="col-md-3">
          <div className="card mb-3">
            <div className="card-body">
              <div className="d-flex">
                <img src={profile} alt="img" height={50} width={60} />
                <div className="ms-3">
                  <p>Hello</p>
                  <b>Bisworanjan</b>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <FontAwesomeIcon icon={faFile} className="me-2" />
                  My Orders
                </li>
                <li className="list-group-item">
                  <FontAwesomeIcon icon={faUserLarge} className="me-2" />
                  Account Settings
                </li>
                <li className="list-group-item">
                  <FontAwesomeIcon icon={faWallet} className="me-2" />
                  Payments
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                My Wishlist ({wishlist.length})
              </h5>
              {wishlist.length > 0 ? (
                wishlist.map((w,i)=> (
                  <div className="row border-bottom py-3" key={i}>
                    <div className="col-md-3">
                      <img src={w.image} alt="img" height={80} width={100} />
                    </div>
                    <div className="col-md-7">
                      <p>{w.title}</p>
                      <div>
                        <span className="green px-2 py-1 rounded text-white">
                          {w.rating.rate}
                        </span>
                        <span> ({w.rating.count})</span>
                      </div>
                      <h2 className="h5 fw-bold mt-3">
                        ₹{w.price} 
                        <span className="fw-normal fs-6 ms-3 text-secondary text-decoration-line-through">
                          {w.price * 2}
                        </span>
                        <span className="fw-normal fs-6 ms-3 tgreen"> 75% OFF</span>
                      </h2>
                    </div>
                    <div className="col-md-2">
                      <button
                        className="btn btn-outline-danger mt-4 px-3"
                        onClick={() => removeWishlist(w.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} className="me-2" />
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="empty-wishlist text-center mt-5 pt-2">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="display-1 text-secondary"
                  />
                  <br />
                  <Link to={'/products'}>
                    <button className="btn btn-outline-primary">
                      Shopping now....
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Wishlist
