import { X } from 'lucide-react'
interface Props {
    isOpen: boolean
    setIsOpenCreate: React.Dispatch<React.SetStateAction<boolean>>
    title: string
    type: "create" | "edit"
}
export const Modal = ({ isOpen, setIsOpenCreate, title, type }: Props) => {
    return (
        <>
            {
                isOpen && (
                    <div className="fixed inset-0 z-50 overflow-y-auto">
                        {/* Overlay */}
                        <div className="fixed inset-0 bg-black bg-opacity-80 transition-opacity" />

                        {/* Modal */}
                        <div className="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0">
                            <div className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg border border-gray-700">
                                {/* Header */}
                                <div className="px-6 py-4 border-b border-gray-700">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-medium text-slate-200">
                                            {title}
                                        </h3>
                                        <button
                                            
                                            className="text-slate-400 hover:text-slate-200 transition-colors"
                                        >
                                            <X className="h-5 w-5" onClick={() => setIsOpenCreate(!isOpen)}/>
                                        </button>
                                    </div>
                                    <p className="mt-1 text-sm text-slate-400">
                                        {type === 'create'
                                            ? 'Ingresa la información del nuevo usuario'
                                            : 'Modifica la información del usuario'}
                                    </p>
                                </div>

                                {/* Content */}
                                <div className="px-6 py-4">
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-200 mb-1">
                                                Nombre
                                            </label>
                                            <input
                                                type="text"
                                                className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                                                placeholder="Nombre completo"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-200 mb-1">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                                                placeholder="correo@ejemplo.com"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-200 mb-1">
                                                Rol
                                            </label>
                                            <select className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                                <option value="user">Usuario</option>
                                                <option value="admin">Administrador</option>
                                            </select>
                                        </div>

                                        {type === 'create' && (
                                            <div>
                                                <label className="block text-sm font-medium text-slate-200 mb-1">
                                                    Contraseña
                                                </label>
                                                <input
                                                    type="password"
                                                    className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                                                    placeholder="••••••••"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="px-6 py-4 border-t border-gray-700 flex justify-end space-x-3">
                                    <button
                                        onClick={() => setIsOpenCreate(!isOpen)}
                                        className="px-4 py-2 text-sm font-medium text-gray-200 bg-transparent border border-gray-600 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-slate-500 transition-colors"
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                                    >
                                        {type === 'create' ? 'Crear Usuario' : 'Guardar Cambios'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}
