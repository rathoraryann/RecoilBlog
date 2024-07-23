import { atom} from "recoil";

export const Auth = atom({
    key: "authSlice",
    default: {
        status: false,
        userData: null
    }
})


/*

selector must specify a get callback, here it is using only of the updation of state of auth atom, use custom hook approach
export const login = selector({
    key: "login",
    set: ({set}, newUserData)=>{
        set(authSlice, {status: true, userData:newUserData})
    }
}) 


export const logout = selector({
    key: "logout",
    set: ({set})=>{
        set(authSlice, {status: false, userData:null})
    }
})  */