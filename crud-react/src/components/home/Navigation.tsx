import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { LoadingScreen } from '../../routes';

export const Navigation = () => {
    return (
        <nav className="flex items-center justify-between p-6">
            <div className="flex items-center space-x-2">
                <Shield className="w-8 h-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-200">SecureAuth</span>
            </div>
            <NavButton />
        </nav>
    )
}


const NavButton = () => {
    const { isAuthenticated, loading, logOut } = useAuth();
    if (loading) return <LoadingScreen />;
    return (

        <>
            {
                isAuthenticated ? (
                    <>
                        <div className='flext items-center space-x-4'>
                            <Link to={"/tasks"} className="btn-primary">
                                Tasks
                            </Link>
                            <button className='btn-secondary' onClick={logOut}>Cerrar sesión</button>
                        </div>
                    </>
                ) : (
                    <div className='flext items-center space-x-4'>
                        <Link to={"/auth/login"} className='px-4 py-2 text-gray-200 hover:text-blue-700'>
                            Iniciar sesión
                        </Link>
                        <Link to={"/auth/register"} className="btn-primary">
                            Registrarse
                        </Link>
                    </div>
                )
            }
        </>

    )
}