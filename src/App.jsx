import React from 'react'
import './App.css'
import Allrouting from './routes/Allrouting'
import { LoginProvider } from './components/login/loginContext/LoginContext'
const App = () => {
  return (
    <div className='app'>
      <LoginProvider>
        
        <Allrouting/>

      </LoginProvider>
      
    </div>
  )
}

export default App
