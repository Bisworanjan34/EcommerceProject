import React, { useContext, useEffect, useState } from 'react'
import './Mens.css'
import mensService from '../../../service/mensService/mensService'
import Navbar from '../Navbar'
import Mensitem from './Mensitem'
import axios from 'axios'
import men from '../../assets/men.jpg'
import Productitem from '../products/Productitem'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from '../cart/cartContext/CartContext'
const Mens = () => {
    let [mensdata, setMens] = useState([])
    let { cart, setCart } = useContext(CartContext)
    let {addCart,setAddCart}=useContext
    (CartContext)
    let [cartItemId,setCartItemId]=useState(null)
    let [clr,setClr]=useState('')
  
    useEffect(()=>{
        axios.get('http://localhost:3000/categories_mensclothing') 
        .then((res)=>setMens(res.data))

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
             theme: "dark",
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
                theme="dark"
            // transition:Bounce

            />
             <Navbar bgcolor={'blue'} textcolor={'white'}/>
             <div className="product-trending  d-flex justify-content-around align-items-center my-3" style={{height:'300px'}}>
              <div className="p-trending-body ">
                <h1 className='fw-bold' style={{fontSize:'33px'}}>50% OFF men's collection </h1>
                <h5>Best online shopping platform</h5>
                <p>Trending men's fashion collection shop now</p>
                <button className='btn btn-primary '>Shop now</button>
                </div>
                <div className="p-trending-img ">
                    <img src={men} alt=""  height={250} width={330} />
                    </div>  
            </div>

            <div className=" w-100  d-flex justify-content-center flex-wrap m-auto gap-4 mt-3 ">
            {mensdata == '' &&  <h2 className='text-center text-danger text-capitalize fw-bold'>
                Network error check your conection
                </h2> }
                {
                    mensdata.length > 0 && mensdata.map((men,index) => {
                        return (
                            
                            <div key={index}>
                                {/* <Mensitem men={men}/> */}
                                <Productitem product={men}
                                  addToCart={addToCart}
                                  activeCartId={cartItemId === men.id}
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

export default Mens
