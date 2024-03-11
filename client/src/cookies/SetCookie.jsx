import Cookies from "js-cookie";

const SetCookie=(cookiename,value)=>{
    Cookies.set(cookiename,value,{
        expires:45,
        secure:true
    })
};

export default SetCookie;