import { useState, useEffect } from "react";

import { auth } from "../firebaseConnection";
import { onAuthStateChanged } from 'firebase/auth'

import { Navigate } from "react-router-dom";

export default function Privete ({children}){
    const [loading, setLoading] = useState(true); //começa carregando até saber se já tem usuário ou não
    const [signed, setSigned] = useState(false); //verifica se usuário está logado ou não

    
    useEffect(()=> {
        async function checkLogin(){
            const unsub = onAuthStateChanged(auth, (user)=> {
                if(user){
                // se possuir algum usuário logado ele entra aqui
                    const userData = {
                        uid: user.uid,
                        email: user.email
                    }

                    localStorage.setItem("@detailUser", JSON.stringify(userData));
                    setLoading(false);
                    setSigned(true);
                } else {
                // se não possui nenhum usuário logado ele entra aqui
                    setLoading(false);
                    setSigned(false);
                }

            })
        }

        checkLogin();
    }, [])

    if(loading){
        return(
            <div></div>
        )
    }

    if(!signed){
        return <Navigate to="/"/>
    }

    return children;
}