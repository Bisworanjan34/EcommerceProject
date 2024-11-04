import React, { useContext, useEffect, useState } from 'react'
import './Jewelery.css'
import jeweleryService from '../../../service/jweleryService/jweleryService'
import Navbar from '../Navbar'
import { useNavigate } from 'react-router-dom'
import Jeweleryitem from './Jeweleryitem'
import axios from 'axios'
import Productitem from '../products/Productitem'
import jewelery from '../../assets/jewelery2.webp'
import { CartContext } from '../cart/cartContext/CartContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Jewelery = () => {
    
    let [jewelerydata, setJewelery] = useState([])
    let { cart, setCart } = useContext(CartContext)
    let {addCart,setAddCart}=useContext(CartContext)
    let [cartItemId,setCartItemId]=useState(null)
    let [clr,setClr]=useState('')
    // let getjewelerydata = () => {
    //     jeweleryService()
    //         .then((res) => {
    //             console.log(res.data)
    //             setJewelery(res.data)
    //         })
    //         .catch((err) => console.log('somthing went wront geting prodc data', err))
    // }

    useEffect(()=>{
        axios.get('http://localhost:3000/categories_jewelery')
        .then((res)=>setJewelery(res.data)) 

    })

    let addToCart = (item) => {
        let filterCart=cart.find((fil)=>fil.id === item.id)
        if(!filterCart){
            setCart([...cart, item])
         }
 
         setCartItemId(item.id)
         setAddCart(true)
         setClr('yellow')
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
    return (
        <div>
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
             <Navbar bgcolor={'red'} textcolor={'white'}/>
             <div className="product-trending  d-flex justify-content-around align-items-center my-3" style={{height:'300px'}}>
              <div className="p-trending-body ">
                <h1 className='fw-bold' style={{fontSize:'33px'}}>50% OFF jewelery collection </h1>
                <h5>Best online shopping platform</h5>
                <p>Trending jewelery nakeles collection shop now</p>
                <button className='btn btn-primary '>Shop now</button>
                </div>
                <div className="p-trending-img shadow">
                    <img src={jewelery} alt=""  height={250} width={280} />
                    </div>  
            </div>

            <div className=" w-100  d-flex justify-content-center flex-wrap m-auto gap-4 mt-3 ">
            {jewelerydata == '' &&  <h2 className='text-center text-danger text-capitalize fw-bold'>
                Network error check your conection
                </h2> }
                {
                    jewelerydata.length > 0 && jewelerydata.map((ele,index) => {
                        return (
                     
                               <div key={index}>
                                    {/* <Jeweleryitem jewelery={ele}/> */}
                                    <Productitem product={ele}
                                     addToCart={addToCart}
                                     activeCartId={cartItemId ===ele.id}
                                     clr={clr}
                                     setClr={setClr}
                                    />
                               </div>
                            
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Jewelery
