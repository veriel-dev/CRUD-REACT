import React, { useEffect, useRef, useState } from "react"
import { AuthContext, TypeUser } from "./AuthContext"
import { toast } from "react-toastify"
import { API } from "../config/variables"
import { useNavigate } from "react-router-dom"

interface Props {
    children: React.ReactNode
}

export const AuthProvider = ({ children }: Props) => {

    const [user, setUser] = useState<TypeUser | null>(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const initialCheckRef = useRef(false);
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
            const responseProfile = await fetch(API.auth.profile, {
                method: "GET",
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const dataProfile = await responseProfile.json();

            const { user: userData } = dataProfile
            setUser(userData)
            setIsAuthenticated(true)
            navigate("/tasks")
            toast.success("Login realizado de forma correcta!!")
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
            setUser(null);
            setIsAuthenticated(false);
            return false;
        } finally {
            setLoading(false);
        }

    }
    const logOut = async () => {
        try {
            const response = await fetch(API.auth.logOut, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            })
            const data = await response.json();
            if (!data.ok) {
                throw new Error('Error al realizar el cierre de sesión');
            }
            toast.success(data.msg)
            setUser(null);
            setIsAuthenticated(false);
        } catch (err) {
            console.log(err)
            err instanceof Error ? toast.error(err.message) : toast.error('Error al cerrar la sesión')
        }
    }
    useEffect(() => {
        const verifyAuth = async () => {
            if (!initialCheckRef || isAuthenticated) {
                await checkAuth()
            }
        }
        verifyAuth();
        setLoading(false)
    }, [isAuthenticated]);
    return (
        <AuthContext.Provider value={{ user, login, checkAuth, isAuthenticated, loading, logOut }}>{children}</AuthContext.Provider>
    )
}
