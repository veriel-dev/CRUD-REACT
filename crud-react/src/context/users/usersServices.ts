import { toast } from "react-toastify";
import { API } from "../../config/variables";



interface TypeUsers {
    username: string
    email: string
    role: "user" | "admin"
    createdAt: string
    updatedAt: string
    uid: string
    status: "active" | "inactive"
}
const usersFetch = async (
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


export const usersServices = {
    async getAllUsers() {
        const response = await usersFetch(API.user.getallusers, {
            method: "GET"
        })
        const data = await response.json();

        if (!data.ok) {
            throw new Error(data.msg || "Error al obtener todos los usaurios");
        }

        return {
            users: data.users as TypeUsers[],
            total: data.total as number,
            page: data.page as number,
            limit: data.limit as number
        }
    },
    async deletaUser(uid:string) {
        const response = await usersFetch(API.user.deleteUserById + "/" + uid, {
            method: "DELETE"
        })
        const data = await response.json();
        if (!data.ok) {
            throw new Error(data.msg || "Error al eliminar el usuario con  uid: " + uid);
        }
        return data
    },
    async updateUser(uid:string) {
        const response = await usersFetch(API.user.updateeUserById + "/" + uid, {
            method: "PUT"
        })
        const data = await response.json();
        if (!data.ok) {
            throw new Error(data.msg || "Error al actualizars el usuario con  uid: " + uid);
        }
        return data
    }

}