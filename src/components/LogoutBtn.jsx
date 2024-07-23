import { useLogout } from "../store/authAction";
import authService from "../appwrite/auth";

function LogoutBtn(){
    const logout = useLogout();
    const logoutHandler = () =>{
        authService.logout().then(()=>{logout()})
        
    }

    return <button className="px-6 inline-block py-2 duration-200 hover:bg-slate-300 rounded-full" onClick={logoutHandler}>Logout</button>
}

export default LogoutBtn;