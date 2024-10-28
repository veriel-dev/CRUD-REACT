export interface AuthState {
    user: TypeUser;
    isAuthenticated: boolean;
    loading: boolean;
}

export interface AuthContextType extends AuthState {
    login: (email: string, password: string) => Promise<void>;
    checkAuth: () => Promise<boolean | undefined>
    logout: () => Promise<void>;
}


export interface TypeUser {
    username: string
    email: string
    role: "admin" | "user"
    createdAt: string
    updatedAt: string
    uid: string
    status: "active" | "inactive"
}
