import { Github, Mail, Shield } from "lucide-react"
import { Link } from "react-router-dom"


export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Shield className="w-6 h-6 text-blue-400" />
                            <span className="text-lg font-bold">SecureAuth</span>
                        </div>
                        <p className="text-gray-400">
                            Soluciones de autenticación seguras y modernas para tu aplicación.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Producto</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Características</li>
                            <li>Precios</li>
                            <li>Documentación</li>
                            <li>API</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Compañía</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Sobre Nosotros</li>
                            <li>Blog</li>
                            <li>Carreras</li>
                            <li>Contacto</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Conéctate</h4>
                        <div className="flex space-x-4">
                            <Link to="#" className="text-gray-400 hover:text-white">
                                <Mail className="w-6 h-6" />
                            </Link>
                            <Link to="#" className="text-gray-400 hover:text-white" target="_blanck">
                                <Github className="w-6 h-6" />
                            </Link>

                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 SecureAuth. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
