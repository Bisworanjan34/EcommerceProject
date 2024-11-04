// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import Navbar from '../../Navbar'
// const WomensDetails = () => {

//     let {id}=useParams()
//     let[state,setState]=useState({
//         image:'',title:'',rating:'',price:'',description:''
//     })

//     useEffect(()=>{
//         axios.get(`http://localhost:3000/categories_womensclothing/${id}`)
//         .then((res)=>setState(res.data))
//     },[])
//   return (
//     <div>
//   <div>
//     <Navbar/>
//        <div>
//             <h2> Womens-product-details={id} </h2>
//             <div className="card m-auto" style={{width:'400px',}}>
//                                     <img src={state.image} className="card-img-top" alt="electronic" 
//                                    height={200} width={200}
//                                     />
//                                         <div className="card-body">
//                                             <h5 className="card-title fs-6 fw-bold">{state.title}</h5>
//                                             <div className="price-rating d-flex w-75 justify-content-between border m-auto">
//                                             <p className="card-text fs-6 fw-bold"> ₹{state.price}</p>
//                                             <p className="card-text fs-6 fw-bold text-primary"> ★★★{state.rating.rate}</p>
//                                             <p className="card-text fs-6 "> {state.rating.count}views</p>
//                                             </div>

//                                             <p className=' text-start'>{state.description}</p>
//                                           <a href='' className="btn  btn-warning me-2">Addtocart</a>
//                                             <a href=" " className="btn btn-primary ">Buynow</a>
//                                         </div>
//                                 </div>

//     </div>
//     </div>
//     </div>
//   )
// }

// export default WomensDetails
