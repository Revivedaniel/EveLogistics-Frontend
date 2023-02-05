import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import "./App.css";
import { claim } from "./auth/auth.models";
import AuthenticationContext from "./auth/AuthenticationContext";
import Authorized from "./auth/Authorized";
import { getClaims } from "./auth/handleJWT";
import Login from "./auth/Login";
import Header from "./general/Header";
import configureInterceptor from "./utils/httpInterceptors";

configureInterceptor();

function App() {

  const [claims, setClaims] = useState<claim[]>([]);

  useEffect(() => {
    setClaims(getClaims());
  }, [])

  return (
    <>
    <AuthenticationContext.Provider value={{claims, update: setClaims}} >
    <Authorized authorized={<>
      <Header />
      <Outlet />
    </>} notAuthorized={<>
      <Login />
    </>} />
      
    </AuthenticationContext.Provider>
    </>
  );
}

export default App;
