import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export const HeroBanner = () => {
    return (
        <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-200 mb-6">
                Panel de Administración Integral
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Una plataforma moderna para gestionar usuarios, roles y monitorear el rendimiento de tu aplicación desde
                un único lugar
            </p>
            <div className="flex justify-center space-x-4">
                <Link to={"/auth/register"} className="px-8 py-3 btn-primary flex items-center space-x-2">
                    <span>Comenzar Ahora</span>
                    <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to={"/docs"} className="px-8 py-3 btn-secondary flex items-center space-x-2">
                    Documentación
                </Link>
            </div>
        </div>
    )
}
