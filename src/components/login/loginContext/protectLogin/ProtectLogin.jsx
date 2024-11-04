import React, { useContext } from 'react'
import { LoginContext } from '../LoginContext'
import { Navigate } from 'react-router-dom'

const ProtectLogin = ({children}) => {
 let {login,setLogin}=useContext(LoginContext)
      if(login){
        return children
      }
      else{
       return <Navigate to={'/'}/>
      }
}
export default ProtectLogin
