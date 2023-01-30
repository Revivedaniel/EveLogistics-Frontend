import { useState } from "react";
import { Outlet } from "react-router";
import "./App.css";
import { claim } from "./auth/auth.models";
import AuthenticationContext from "./auth/AuthenticationContext";
import Authorized from "./auth/Authorized";
import Header from "./general/Header";

function App() {

  const [claims, setClaims] = useState<claim[]>([]);

  return (
    <>
    <AuthenticationContext.Provider value={{claims, update: setClaims}} >
    <Authorized authorized={<>
      <Header />
      <Outlet />
    </>} notAuthorized={<>You are not authorized</>} role="admin" />
      
    </AuthenticationContext.Provider>
    </>
  );
}

export default App;
