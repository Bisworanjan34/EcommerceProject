import React, { useContext, useEffect, useState } from 'react'
import './Products.css'
import productsSrvice from '../../../service/productsService/productsService'
import Navbar from '../Navbar'
import Productitem from './Productitem'
import axios from 'axios'
import { CartContext } from '../cart/cartContext/CartContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import allitem from '../../assets/couple.webp'
import men from '../../assets/men.jpg'
import women from '../../assets/women.jpg'
import './Products.css'

const Products = () => {
    let [productsdata, setProducts] = useState([])
    let { cart, setCart } = useContext(CartContext)
    let {addCart,setAddCart}=useContext(CartContext)
    let [cartItemId,setCartItemId]=useState(null)
    let [clr,setClr]=useState('')
  
    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then((res) => {
                setProducts(res.data)
            })
        console.log('products data showing')
    }, [])

// let additeminCarturl=()=>{
//     console.log('add cartitem incart url')
//     axios.post('http://localhost:3000/addToCart',cart)
//     .then((res)=>console.log(res.data))
// }

// let removeitemFromCartUrl=()=>{
//     // console.log('removecart item in cart url')
//     // axios.delete(`http://localhost:3000/addToCart${cart.id}`)
//     // .then((res)=>console.log(res.data))
// }

    let addToCart = (item) => {
       let filterCart=cart.find((fil)=>fil.id === item.id)
       if(!filterCart){
           setCart([...cart, item])
        }

        setCartItemId(item.id)
        setAddCart(true)
        setClr('rgb(224, 255, 254)')
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
            <Navbar bgcolor={'blue'} textcolor={'white'} />

            <div className="animation-div w-100 d-flex" style={{height:'300px',background:'navy'}}>
                <div className="anim-box1 w-100">
                    {/* <img src={allitem} alt="" width={'100%'} height={'100%'}/> */}
                </div>
                <div className="anim-box2 w-100 ">
                    {/* <img src={men} alt=""  width={'100%'} height={'100%'}/> */}
                </div>
                <div className="anim-box3 w-100">
                    {/* <img src={women} alt=""  width={'100%'} height={'100%'}/> */}
                </div>
            </div>
            <div className="product-trending  d-flex justify-content-around align-items-center my-3" style={{height:'300px'}}>
              <div className="p-trending-body ">
                <h1 className='fw-bold' style={{fontSize:'33px'}}>50% OFF ONLY FOR YOU </h1>
                <h5>Best online shopping platform</h5>
                <p>Trending fashion mobile watch nakeles collection shop now</p>
                <button className='btn btn-primary '>Shop now</button>
                </div>
                <div className="p-trending-img">
                    <img src={allitem} alt=""  height={280}/>
                    </div>  
            </div>
            {/* ----------product-items map----------- */}
            <div className=" w-100  d-flex justify-content-center flex-wrap m-auto gap-4 mt-3 ">
                {productsdata == '' && <h2 className='text-center text-danger text-capitalize fw-bold'>
                   Network error check your conection
                </h2>}
                {
                    productsdata.length > 0 && productsdata.map((product, index) => {
                        return (
                            <div key={index}>
                                <Productitem 
                                product={product} 
                                addToCart={addToCart}
                                activeCartId={cartItemId === product.id}
                                clr={clr}
                                setClr={setClr}
                                // additeminCarturl={additeminCarturl}
                                // removeitemFromCartUrl={removeitemFromCartUrl}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products
