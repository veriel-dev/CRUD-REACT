import { useState } from "react";
import { ButtonsActions } from "./ButtonsActions";
import { SearchBar } from "./SearchBar";
import { Table } from "./Table";
import { useUsers } from "../../../hooks/useUsers";

export const TableUser =  () => {
    const [searchTerm, setSearchTerm] = useState('');
    const {users} = useUsers()

    const filteredUsers = users?.filter(user =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const getRoleColor = (role: string) => {
        switch (role) {
            case 'admin':
                return 'bg-purple-500/10 text-purple-500';
            default:
                return 'bg-blue-500/10 text-blue-500';
        }
    };
    const getStatusColor = (status: string) => {
        return status === 'active'
            ? 'text-green-500'
            : 'text-red-500';
    };
    return (
        <div className="space-y-6">
            <ButtonsActions />
            <div className="bg-gray-800 rounded-lg shadow">
                <div className="p-4">
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    <Table filteredUsers={filteredUsers} getRoleColor={getRoleColor} getStatusColor={getStatusColor} />
                    <div className="flex justify-between items-center mt-4 text-sm text-slate-400">
                        <div>Mostrando {filteredUsers.length} de {users.length} usuarios</div>
                        <div className="flex items-center gap-2">
                            <button className="px-3 py-1 bg-slate-700 rounded hover:bg-slate-600">Anterior</button>
                            <button className="px-3 py-1 bg-slate-700 rounded hover:bg-slate-600">Siguiente</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
