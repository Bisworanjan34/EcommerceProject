import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Electronics from '../components/electronics/Electronics'
import Products from '../components/products/Products'
import Jewelery from '../components/jewelery/Jewelery'
import Mens from '../components/mens/Mens'
import Womens from '../components/womens/Womens'
import Profile from '../components/profile/Profile'
import Cart from '../components/cart/Cart'
import Wishlist from '../components/wishlist.jsx/Wishlist'
import Login from '../components/login/Login'
import Home from '../pages/home/Home'
import Pagenotfound from '../pages/pagenotfound/Pagenotfound'
import ProductDetails from '../components/products/productDetails/ProductDetails'
import { CartProvider } from '../components/cart/cartContext/CartContext'
import { useContext } from 'react'
import { LoginContext } from '../components/login/loginContext/LoginContext'
import ProtectLogin from '../components/login/loginContext/protectLogin/ProtectLogin'
import Grocery from '../pages/grocery/Grocery'
import Buynow from '../components/buynow/Buynow'
import { BuynowProvider } from '../components/buynow/buynowContext/BuynowContext'
import Footer from '../components/Footer'
import { WishlistProvider } from '../components/wishlist.jsx/wishlistContext/WishlistContext'
import FlipkartCart from '../components/cart/flipkartCart/FlipkartCart'
import GroceryCart from '../components/cart/groceryCart/GroceryCart'
import { GroceryCartProvider } from '../pages/grocery/groceryCartContext/GroceryCartContext'
const Allrouting = () => {
  let { login, setLogin } = useContext(LoginContext)
  return (
    <div>
      <BuynowProvider>
        <WishlistProvider>
          <GroceryCartProvider>
          <CartProvider>
            <Routes>
              <Route path='/' element={login ? <Home /> : <Login />} />
              <Route path='/grocery' element={<Grocery />} />
              <Route path='/products' element={
                <ProtectLogin>
                  <Products />
                </ProtectLogin>


              } />
              <Route path='/productdetails/:category/:id' element={<ProductDetails />} />
              <Route path='/electronics' element={<Electronics />} />

              <Route path='/jewelery' element={<Jewelery />} />

              <Route path='/mens' element={<Mens />} />

              <Route path='/womens' element={<Womens />} />

              <Route path='/profile' element={<Profile />} />
              <Route path='/cart' element={<Cart />}>
                <Route index path='' element={<FlipkartCart/>}/>
                <Route path='flipkartcart' element={<FlipkartCart />} />
                <Route path='grocerycart' element={<GroceryCart />} />
              </Route>
              <Route path='/buynow/:category/:id' element={<Buynow />}></Route>
              <Route path='/wishlist' element={<Wishlist />} />
              {/* <Route path='/login' element={<Login/>}/> */}
              <Route path='*' element={<Pagenotfound />} />
            </Routes>
          </CartProvider>
          </GroceryCartProvider>
        </WishlistProvider>
      </BuynowProvider>
      <Footer />

    </div>
  )
}

export default Allrouting
