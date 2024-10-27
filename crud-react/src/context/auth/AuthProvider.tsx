import React, { useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { useAuth } from "../../hooks/useAuth";

interface Props {
    children: React.ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
    const auth = useAuth();

    useEffect(() => {
        auth.checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
};