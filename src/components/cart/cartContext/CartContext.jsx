import { createContext, useState } from "react";

let CartContext=createContext()

let CartProvider=({children})=>{
    let [cart,setCart]=useState([])
    let [addCart,setAddCart]=useState(false)

    return(
        <CartContext.Provider value={{cart,setCart,addCart,setAddCart}}>
            {children}
        </CartContext.Provider>
    )
}
export {CartContext,CartProvider}