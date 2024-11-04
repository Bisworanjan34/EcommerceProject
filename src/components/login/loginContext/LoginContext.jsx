// import { createContext, useState } from "react";

// let LoginContext=createContext()

// let LoginProvider=({children})=>{
// let [login,setLogin]=useState(false)
// return(
//     <LoginContext.Provider value={{login,setLogin}}>
//         {children}
//     </LoginContext.Provider>
// )
// }
// export {LoginContext,LoginProvider}

import { createContext, useState, useEffect } from 'react';

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState(() => {
    const storedLogin = localStorage.getItem('login');
    return storedLogin ? JSON.parse(storedLogin) : false;
  });

  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(login));
  }, [login]);

  return (
    <LoginContext.Provider value={{ login, setLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginProvider, LoginContext };

