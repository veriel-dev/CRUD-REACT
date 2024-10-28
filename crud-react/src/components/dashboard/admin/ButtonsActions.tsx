import { Download, UserPlus } from 'lucide-react'
import { Modal } from './Modal'
import { useState } from 'react'
import { useUsers } from '../../../hooks/useUsers'

export const ButtonsActions = () => {
    const [isOpenCreate, setIsOpenCreate] = useState(false)
    const {exportCSV} = useUsers()
    return (
        <div className="flex justify-end items-center">
            <div className="flex items-center gap-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors" onClick={exportCSV}>
                    <Download className="h-4 w-4" />
                    Exportar
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors" onClick={() => setIsOpenCreate(true)}>
                    <UserPlus className="h-4 w-4" />
                    Agregar Usuario
                </div>
                <Modal
                    isOpen={isOpenCreate}
                    setIsOpenCreate={setIsOpenCreate}
                    title="Crear Nuevo Usuario"
                    type="create"
                />
            </div>
        </div>
    )
}
