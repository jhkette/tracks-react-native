
import { Context as AuthContext } from "../context/AuthContext";
import React ,{useEffect, useContext} from "react";

const ResolveAuthScreen = () =>{
    const {tryLocalSignin} = useContext(AuthContext);

    useEffect(()=> {
        tryLocalSignin();
    }, [])
    
    return null;
}


export default ResolveAuthScreen;