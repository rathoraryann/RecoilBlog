import React, {useState, useEffect} from "react";
import { useRecoilValue } from "recoil";
import {Auth} from "../store/auth"
import { useNavigate } from "react-router-dom";

export default function Protected({children, authentication=true}){
    const [loader, setLoader] = useState(true)
    const navigate = useNavigate()
    const authState = useRecoilValue(Auth)

    useEffect(()=>{
        if(authentication && authState.status !== authentication){
            navigate("/login")
        } else if(!authentication && authState.status !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [authState.status, navigate, authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>}