import { useState } from "react";
import { ButtonsActions } from "./ButtonsActions";
import { SearchBar } from "./SearchBar";
import { Table } from "./Table";

export const TableUser = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const users = [
        {
            id: 1,
            name: 'Carlos Martínez',
            email: 'carlos@ejemplo.com',
            role: 'admin',
            status: 'active',
            lastLogin: '2024-10-26 15:30',
            created: '2024-01-15'
        },
        {
            id: 2,
            name: 'María González',
            email: 'maria@ejemplo.com',
            role: 'user',
            status: 'active',
            lastLogin: '2024-10-25 09:45',
            created: '2024-02-20'
        },
        {
            id: 3,
            name: 'Juan Pérez',
            email: 'juan@ejemplo.com',
            role: 'admin',
            status: 'inactive',
            lastLogin: '2024-10-20 11:20',
            created: '2024-03-05'
        },
        {
            id: 4,
            name: 'Laura Sánchez',
            email: 'laura@ejemplo.com',
            role: 'user',
            status: 'active',
            lastLogin: '2024-10-26 16:15',
            created: '2024-03-10'
        },
        {
            id: 5,
            name: 'Roberto López',
            email: 'roberto@ejemplo.com',
            role: 'user',
            status: 'active',
            lastLogin: '2024-10-24 14:30',
            created: '2024-04-01'
        }
    ];
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
