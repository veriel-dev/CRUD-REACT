import { Edit, MoreVertical, Trash2 } from "lucide-react"
import { useState } from "react";
import { TypeUser } from "../../../context";
import { useUsers } from "../../../hooks/useUsers";
import { Modal } from "./Modal";


interface Props {
    user: TypeUser
}
export const MenuActionUser = ({ user }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenEdit, setIsOpenEdit] = useState(false)
    const { handeleDeleteUser } = useUsers()
    return (

        <div className="relative inline-block text-left">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 hover:bg-gray-700 rounded-full transition-colors"
            >
                <MoreVertical className="h-4 w-4 text-slate-400" />
            </div>
            {isOpen && (
                <>
                    {/* Overlay para cerrar el menú al hacer click fuera */}
                    <div
                        className="fixed inset-0 z-10"
                        onClick={() => setIsOpen(false)}
                    />
                    {/* Menú desplegable */}
                    <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg z-20">
                        <div className="bg-gray-800 border border-gray-700 rounded-md shadow-xs">
                            <div
                                className="flex items-center gap-2 w-full px-4 py-2 text-sm text-slate-200 hover:bg-gray-700 transition-colors"
                                onClick={() => setIsOpenEdit(true)}
                            >
                                <Edit className="h-4 w-4" />
                                Editar
                            </div>
                            <Modal
                                    isOpen={isOpenEdit}
                                    setIsOpenCreate={setIsOpenEdit}
                                    title="Editar Usuario"
                                    type="edit"
                                /> 
                            <div className="border-t border-gray-700" />
                            <div
                                className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-400 hover:bg-gray-700 transition-colors"
                                onClick={() => handeleDeleteUser(user.uid)}
                            >
                                <Trash2 className="h-4 w-4" />
                                Eliminar
                            </div>
                        </div>
                    </div>

                </>
            )}
        </div>

    )
}
