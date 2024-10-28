import { CheckCircle, Shield, XCircle } from "lucide-react";
import { TypeUser } from "../../../context";
import { MenuActionUser } from "./MenuActionUser";


interface Props {
    filteredUsers: TypeUser[],
    getRoleColor: (role: string) => "bg-purple-500/10 text-purple-500" | "bg-blue-500/10 text-blue-500",
    getStatusColor: (status: string) => "text-green-500" | "text-red-500"
}
export const Table = ({ filteredUsers, getRoleColor, getStatusColor }: Props) => {
    return (
        <div className='overflow-x-auto'>
            <table className='w-full'>
                <thead>
                    <tr className='border-b border-gray-700'>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Usuario</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Rol</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Estado</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Último acceso</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Fecha registro</th>
                        <th className="text-right py-3 px-4 text-gray-400 font-medium">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredUsers.map((user) => (
                            <tr key={user.uid} className="border-b border-gray-700 hover:bg-gray-700/50">
                                {/* User - Email */}
                                <td className="py-3 px-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center">
                                            <span className="text-sm font-medium text-slate-300">
                                                {user.username.charAt(0)}
                                            </span>
                                        </div>
                                        <div>
                                            <div className="font-medium text-slate-200">{user.username}</div>
                                            <div className="text-sm text-slate-400">{user.email}</div>
                                        </div>
                                    </div>
                                </td>
                                {/* Rol */}
                                <td className="py-3 px-4">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                                        <Shield className="h-3 w-3" />
                                        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                                    </span>
                                </td>
                                {/* Status */}
                                <td className="py-3 px-4">
                                    <span className="inline-flex items-center gap-1.5">
                                        {user.status === 'active' ? (
                                            <CheckCircle className={`h-4 w-4 ${getStatusColor(user.status)}`} />
                                        ) : (
                                            <XCircle className={`h-4 w-4 ${getStatusColor(user.status)}`} />
                                        )}
                                        <span className={`text-sm ${getStatusColor(user.status)}`}>
                                            {user.status === 'active' ? 'Activo' : 'Inactivo'}
                                        </span>
                                    </span>
                                </td>
                                {/* Date */}
                                <td className="py-3 px-4 text-sm text-slate-300">{user.updatedAt}</td>
                                <td className="py-3 px-4 text-sm text-slate-300">{user.createdAt}</td>
                                <td className="py-3 px-4">
                                    <div className="flex justify-end">
                                        <button className="p-1 hover:bg-slate-600 rounded">
                                            <MenuActionUser user={user}/>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
