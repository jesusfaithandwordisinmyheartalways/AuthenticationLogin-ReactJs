

import React from "react";
import { useState } from "react";
import { createContext } from "react";
import '../components/Authentication/auth.css'


export const AuthenticationContext = createContext();

export const AuthenticationProvider = ( { children }) => {
    const [authentication, setAuthentication] = useState(null);

    const Login = (username) => {
        setAuthentication( { username })
    }
    const Logout = () => {
        setAuthentication(null)
    }

    return (
        <>
            <AuthenticationContext.Provider value={{authentication, Login, Logout}}>
                    {children}
            </AuthenticationContext.Provider>
        </>
    )
}