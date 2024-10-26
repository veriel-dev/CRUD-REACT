import { createContext } from "react";


export interface TypeUser {
    username: string
    email: string
    role: "admin" | "user"
    createdAt: string
    updatedAt: string
    uid: string
}

interface TypeAuthContext {
    user: TypeUser | null
    login: (email: string, password: string) => Promise<void>
    checkAuth: () => Promise<boolean>
    isAuthenticated: boolean
    loading: boolean
    logOut: () => Promise<void>
}

export const AuthContext = createContext({} as TypeAuthContext)

