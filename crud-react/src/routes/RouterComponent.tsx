import { Routes, Route } from "react-router-dom"
import { HomePage, LoginPage, RegisterPage } from "../screens"
import { DashboardTask } from "../components/tasks"

export const RouterComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
            <Route path="/tasks" element={<DashboardTask />} />
        </Routes>
    )
}
