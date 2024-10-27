import { toast } from "react-toastify"
import { TypeUser } from "./interface"
import { API } from "../../config/variables"


interface LoginResponse {
    ok: boolean
    msg?: string
    token: string
}

interface ProfileResponse {
    user: TypeUser
}

const authFetch = async (
    url: string,
    options: RequestInit = {}
): Promise<Response> => {
    const token = localStorage.getItem("token");
    const defaultHeaders = {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
    };

    return fetch(url, {
        ...options,
        headers: {
            ...defaultHeaders,
            ...options.headers,
        },
        credentials: "include",
    });
};


export const handleError = (error: unknown, defaultMessage: string) => {
    const errorMessage = error instanceof Error ? error.message : defaultMessage;
    toast.error(errorMessage);
    return Promise.reject(error);
}

export const authServices = {
    async login(email:string, password: string):Promise<{ token: string; user: TypeUser }> {
        const response = await authFetch(API.auth.login, {
            method: "POST",
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json() as LoginResponse;
        if (!data.ok) {
            throw new Error(data.msg || "Error en el login");
        }
        localStorage.setItem("token", data.token);
        const profileResponse = await authFetch(API.auth.profile);
        const profileData = await profileResponse.json() as ProfileResponse;
        return {
            token: data.token,
            user: profileData.user,
        };
    },
    async checkAuth(): Promise<TypeUser | null> {
        const token = localStorage.getItem("token")
        if (!token) return null
        const response = await authFetch(API.auth.profile)
        if (!response.ok) return null

        const data = await response.json() as ProfileResponse

        return data.user
    },
    logout(): void {
        localStorage.removeItem("token");
    }

}