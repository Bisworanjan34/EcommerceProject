import React, { useContext, useEffect, useState } from 'react'
import './Womens.css'
import womensService from '../../../service/womensService/womensService'
import Navbar from '../Navbar'
import Womenitem from './Womenitem'
import axios from 'axios'
import Productitem from '../products/Productitem'
import women from '../../assets/women.jpg'
import { CartContext } from '../cart/cartContext/CartContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Womens = () => {
    let [womensdata, setWomens] = useState([])
    let { cart, setCart } = useContext(CartContext)
    let {addCart,setAddCart}=useContext(CartContext)
    let [cartItemId,setCartItemId]=useState(null)
    let [clr,setClr]=useState('')
        useEffect(()=>{
            axios.get('http://localhost:3000/categories_womensclothing')
            .then((res)=>setWomens(res.data)) 

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
             <Navbar bgcolor={'pink'} textcolor={'black'}/>
             <div className="product-trending  d-flex justify-content-around align-items-center my-3" style={{height:'300px'}}>
              <div className="p-trending-body ">
                <h1 className='fw-bold' style={{fontSize:'33px'}}>50% OFF women's collection </h1>
                <h5>Best online shopping platform</h5>
                <p>Trending women's fashion collection shop now</p>
                <button className='btn btn-primary '>Shop now</button>
                </div>
                <div className="p-trending-img ">
                    <img src={women} alt=""  height={250} width={330} />
                    </div>  
            </div>
            <div className=" w-100  d-flex justify-content-center flex-wrap m-auto gap-4 mt-3 ">
            {womensdata == '' &&  <h2 className='text-center text-danger text-capitalize fw-bold'>
                Network error check your conection
                </h2> }
                {
                    womensdata.length > 0 && womensdata.map((women,index) => {
                        return (
                            <div key={index}>
                                {/* <Womenitem women={women}/> */}
                                <Productitem product={women}
                                  addToCart={addToCart}
                                  activeCartId={cartItemId === women.id}
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

export default Womens
