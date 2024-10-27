import { Download, UserPlus } from 'lucide-react'

export const ButtonsActions = () => {
    return (
        <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-white">Usuarios Registrados</h2>
            <div className="flex items-center gap-4">
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">
                    <Download className="h-4 w-4" />
                    Exportar
                </button>
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors">
                    <UserPlus className="h-4 w-4" />
                    Agregar Usuario
                </button>
            </div>
        </div>
    )
}
