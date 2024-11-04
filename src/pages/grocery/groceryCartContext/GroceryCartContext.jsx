import { createContext, useState } from "react";

let GroceryCartContext=createContext()

let GroceryCartProvider=({children})=>{
    let [groceryCart,setGroceryCart]=useState([])
    let [groceryAdd,setGroceryAdd]=useState(false)

    return (
        <GroceryCartContext.Provider value={{groceryCart,setGroceryCart,groceryAdd,setGroceryAdd}}>
            {children}
        </GroceryCartContext.Provider>
    )
}

export {GroceryCartContext,GroceryCartProvider}