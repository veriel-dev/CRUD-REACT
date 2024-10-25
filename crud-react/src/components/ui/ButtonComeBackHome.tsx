import { Link } from "react-router-dom"

export const ButtonComeBackHome = () => {
    return (
        <div className="flex justify-center mt-2">
            <div className="text-sm text-gray-400">
                Regresar al <Link to={'/'} className="text-gray-200 font-bold hover:underline">Inicio</Link>
            </div>
        </div>
    )
}
