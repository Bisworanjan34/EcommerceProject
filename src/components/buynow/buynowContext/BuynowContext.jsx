import { createContext, useState } from "react";

let BuynowContext=createContext()

let BuynowProvider=({children})=>{
let [buynow,setBuynow]=useState([])

return(
    <BuynowContext.Provider value={{buynow,setBuynow}}>
        {children}
    </BuynowContext.Provider>
)
}

export {BuynowContext,BuynowProvider}