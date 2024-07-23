import { Auth } from "./auth";
import { useSetRecoilState } from "recoil";

export const useLogin = () =>{
    const setAuth = useSetRecoilState(Auth)
    return(newData)=>{
    setAuth({status: true, userData: newData})}
}

export const useLogout = () =>{
    const setAuth = useSetRecoilState(Auth)
    return ()=>{
    setAuth({status: false, userData: null})}
}