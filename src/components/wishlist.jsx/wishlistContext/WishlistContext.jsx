import { createContext, useState } from "react";

let WishlistContext=createContext()
let WishlistProvider=({children})=>{
let [wishlist,setWishlist]=useState([])
let [addWish,setAddwish]=useState(false)

return(
    <WishlistContext.Provider value={{wishlist,setWishlist,addWish,setAddwish}} >
        {children}
    </WishlistContext.Provider>
)
}

export {WishlistContext,WishlistProvider}