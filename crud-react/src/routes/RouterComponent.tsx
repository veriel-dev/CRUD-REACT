import { Routes, Route, useLocation, Navigate } from "react-router-dom"
import { HomePage, LoginPage, RegisterPage } from "../screens"
import { DashboardTask } from "../components/dashboard"
import { useAuthContext } from "../hooks/useAuthContext"

const PUBLIC_ROUTES = {
    HOME: '/',
    LOGIN: '/auth/login',
    REGISTER: '/auth/register'
}
const PRIVATE_ROUTES = {
    TASKS: '/tasks'
}
interface RouteGuardProps {
    children: React.ReactNode;
}

export const LoadingScreen = () => (
    <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-400" />
    </div>
);

const AuthGuard = ({ children }: RouteGuardProps) => {
    const { isAuthenticated, loading } = useAuthContext();

    if (loading) return <LoadingScreen />;

    if (isAuthenticated) {
        return <Navigate to={PRIVATE_ROUTES.TASKS} replace />;
    }

    return children;
};

const PrivateGuard = ({ children }: RouteGuardProps) => {
    const { isAuthenticated, loading } = useAuthContext();
    const location = useLocation();

    if (loading) return <LoadingScreen />;

    if (!isAuthenticated) {
        return <Navigate to={PUBLIC_ROUTES.LOGIN} state={{ from: location }} replace />;
    }

    return children;
};



export const RouterComponent = () => {
    return (
        <Routes>
            {/* Rutas públicas */}
            <Route path={PUBLIC_ROUTES.HOME} element={<HomePage />} />
            <Route path="/home" element={<Navigate to={PUBLIC_ROUTES.HOME} replace />} />

            {/* Rutas de autenticación */}
            <Route path="/auth/*" element={
                <AuthGuard>
                    <Routes>
                        <Route path="login" element={<LoginPage />} />
                        <Route path="register" element={<RegisterPage />} />
                    </Routes>
                </AuthGuard>
            } />

            {/* Rutas privadas */}
            <Route path="/tasks" element={
                <PrivateGuard>
                    <DashboardTask />
                </PrivateGuard>
            } />

            {/* Ruta 404 */}
            <Route path="*" element={<Navigate to={PUBLIC_ROUTES.HOME} replace />} />
        </Routes>
    );
};