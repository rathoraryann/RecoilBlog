import { useState } from "react";
import authService from "./appwrite/auth";
import { useEffect } from "react";
import { useLogin, useLogout } from './store/authAction'
import {Header, Footer} from "./components/index"
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true)
  const login = useLogin()
  const logout = useLogout()


  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          login( userData )
        } else {
          logout()
        }
      })
      .finally(()=>setLoading(false))
  }, [])
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-blue-400">
      <div className="w-full block">
        <Header/>
        <main><Outlet/></main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App;