import React, { useEffect, useState } from "react"
import { AuthContext, TypeUser } from "./AuthContext"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { API } from "../config/variables"

interface Props {
    children: React.ReactNode
}

export const AuthProvider = ({ children }: Props) => {

    const [user, setUser] = useState<TypeUser | null>(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    const login = async (email: string, password: string) => {
        try {
            const response = await fetch(API.auth.login, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    email,
                    password
                })
            })
            const data = await response.json();

            if (!data.ok) {
                throw new Error(data.msg || 'Error en el login');
            }
            const { token } = data
            localStorage.setItem('token', token);
            const responseProfile = await fetch(API.auth.profile, {
                method: "GET",
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const dataProfile = await responseProfile.json();
            
            const {user:userData} = dataProfile
            setUser(userData)
            toast.success("Login realizado de forma correcta!!")
            navigate("/tasks")
            
        } catch (err) {
            err instanceof Error ? toast.error(err.message) : toast.error('Error en el inicio de sesión')
        }
    }
    const checkAuth = async () => {
        try {
            const response = await fetch(API.auth.profile, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (response.ok) {
                const data = await response.json();
                setUser(data.user);
                setIsAuthenticated(true);
                return true;
            } else {
                setUser(null);
                setIsAuthenticated(false);
                return false;
            }
        } catch (error) {
            console.error('Error checking auth:', error);
            setUser(null);
            setIsAuthenticated(false);
            return false;
        } finally {
            setLoading(false);
        }

    }
    useEffect(() => {
        checkAuth();
    }, []);
    return (
        <AuthContext.Provider value={{user, login, checkAuth, isAuthenticated, loading}}>{children}</AuthContext.Provider>
    )
}
