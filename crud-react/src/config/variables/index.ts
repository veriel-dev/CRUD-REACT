const BASE_URL = import.meta.env.VITE_URL_BACKEND;

if (!BASE_URL) {
    throw new Error('VITE_URL_BACKEND is not defined in environment variables');
}

const createApiEndpoint = (path: string) => `${BASE_URL}${path}`;

export const API = {
    auth: {
        login: createApiEndpoint('/auth/login'),
        register: createApiEndpoint('/auth/register'),
        profile: createApiEndpoint('/auth/profile')
    }
};