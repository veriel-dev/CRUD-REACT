import { useCallback, useState } from 'react'

import { authServices, AuthState, handleError } from '../context';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    loading: true,
};

export const useAuth = () => {
    const [state, setState] = useState<AuthState>(initialState);
    const navigate = useNavigate()

    const updateState = useCallback((newState: Partial<AuthState>) => {
        setState((prev) => ({ ...prev, ...newState }));
    }, []);

    const login = useCallback(async (email: string, password: string) => {
        try {
            const { user } = await authServices.login(email, password);

            updateState({
                user,
                isAuthenticated: true,
                loading: false,
            });

            navigate("/tasks");
            toast.success("Login realizado de forma correcta!");
        } catch (error) {
            handleError(error, "Error en el inicio de sesión");
        }
    }, [navigate, updateState]);

    const checkAuth = useCallback(async () => {
        try {
            const user = await authServices.checkAuth();

            updateState({
                user,
                isAuthenticated: !!user,
                loading: false,
            });

            return !!user;
        } catch (error) {
            updateState({
                user: null,
                isAuthenticated: false,
                loading: false,
            });
            return false;
        }
    }, [updateState]);

    const logout = useCallback(async () => {
        try {
            authServices.logout();
            updateState({
                user: null,
                isAuthenticated: false,
            });
            toast.success("Sesión cerrada correctamente");
        } catch (error) {
            handleError(error, "Error al cerrar la sesión");
        }
    }, [updateState]);


    return {
        ...state,
        login,
        checkAuth,
        logout,
    };
}
