import { createContext, useEffect, useState } from "react"
import { handleError, TypeUser } from "../auth"
import { usersServices } from "./usersServices"
import { toast } from "react-toastify"

interface TypeGetUsers {
    users: TypeUser[]
    total: number
    page: number
    limit: number
}

export interface UsersContextType {
    users: TypeUser[];
    total: number;
    page: number;
    limit: number;
    handeleDeleteUser: (uid: string) => Promise<void>;
    exportCSV: () => void;
}

export const UsersContext = createContext<UsersContextType | undefined>(undefined);

export const UsersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [users, setUsers] = useState<TypeGetUsers>({
        users: [],
        total: 0,
        page: 1,
        limit: 10
    });

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const getAllUsersByAdmin = await usersServices.getAllUsers();
                setUsers({
                    users: getAllUsersByAdmin.users,
                    total: getAllUsersByAdmin.total,
                    page: getAllUsersByAdmin.page,
                    limit: getAllUsersByAdmin.limit
                });
            } catch (error) {
                handleError(error, "Error al obtener todos los usuarios");
            }
        };

        fetchUsers();
    }, []);

    const handeleDeleteUser = async (uid: string) => {
        try {
            await usersServices.deletaUser(uid);
            const newUser = users.users.filter(user => user.uid !== uid);
            setUsers({ ...users, users: newUser });
            toast.success("Usuario eliminado correctamente");
        } catch (error) {
            handleError(error, "Error al eliminar el usuario");
        }
    };
    const exportCSV = () => {
        const data = users.users
        const filename = "users_table"
        const delimiter = ","
        const csvHeaders = Object.keys(data[0]);


        const headerRow = csvHeaders.join(delimiter);


        const csvRows = data.map(row => {
            return csvHeaders.map(header => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-expect-error
                const cellValue = row[header] ?? '';
                const stringValue = cellValue?.toString() ?? '';


                if (stringValue.includes(delimiter) || stringValue.includes('"') || stringValue.includes('\n')) {
                    return `"${stringValue.replace(/"/g, '""')}"`;
                }

                return stringValue;
            }).join(delimiter);
        });

        const csvContent = [headerRow, ...csvRows].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', `${filename}.csv`);
        link.style.visibility = 'hidden';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        window.URL.revokeObjectURL(url);
    }
    const value = {
        users: users.users,
        total: users.total,
        page: users.page,
        limit: users.limit,
        handeleDeleteUser,
        exportCSV
    };

    return (
        <UsersContext.Provider value={value}>
            {children}
        </UsersContext.Provider>
    );
};