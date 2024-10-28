import { useContext } from "react";
import { UsersContext } from "../context/users";

export const useUsers = () => {
    const context = useContext(UsersContext);

    if (context === undefined) {
        throw new Error('useAuthContext debe ser usado dentro de un UsersProvider');
    }

    return context;
};