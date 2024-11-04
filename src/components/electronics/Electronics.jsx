import React, { useContext, useEffect, useState } from 'react'
import './Electronics.css'
import electronicService from '../../../service/electronicsService/electronicsService'
import Navbar from '../Navbar'
import Electronicitem from './Electronicitem'
import axios from 'axios'
import Productitem from '../products/Productitem'
import electronic from '../../images/mobile1.png'
import { CartContext } from '../cart/cartContext/CartContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Electronics = () => {
    let [electronicdata, setElectronic] = useState([])
    let { cart, setCart } = useContext(CartContext)
    let {addCart,setAddCart}=useContext(CartContext)
    let [cartItemId,setCartItemId]=useState(null)
    let [clr,setClr]=useState('')
  
  
    useEffect(()=>{
        axios.get('http://localhost:3000/categories_electronics') 
       .then((res)=>setElectronic(res.data))
        .catch((err)=>console.log(err,'data geting err'))
    },[])

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
             theme: "light",
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
                theme="light"
            // transition:Bounce

            />
            <Navbar bgcolor={'green'} textcolor={'white'}/>
            <div className="product-trending  d-flex justify-content-around align-items-center my-3" style={{height:'300px'}}>
              <div className="p-trending-body ">
                <h1 className='fw-bold' style={{fontSize:'33px'}}>50% OFF electronics collection </h1>
                <h5>Best online shopping platform</h5>
                <p>Trending electronics mobile watch collection shop now</p>
                <button className='btn btn-primary '>Shop now</button>
                </div>
                <div className="p-trending-img ">
                    <img src={electronic} alt=""  height={250} width={280} />
                    </div>  
            </div>
            <div className=" w-100  d-flex justify-content-center flex-wrap m-auto gap-4 mt-3 ">
            {electronicdata.length == 0 &&  <h2 className='text-center text-danger text-capitalize fw-bold'>
                Network error check your conection 
                </h2> }
                {
                    electronicdata.length > 0 && electronicdata.map((ele,indx) => {
                        return (
                            // <div className='w-25 border p-2 bg-primary text-light overflow-auto '>
                            <div key={indx}>
                              <Productitem product={ele}
                               addToCart={addToCart}
                               activeCartId={cartItemId === ele.id}
                               clr={clr}
                               setClr={setClr}
                              />
                            </div>
                            // </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Electronics
