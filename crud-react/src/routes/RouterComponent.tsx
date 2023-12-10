import { Routes, Route } from "react-router-dom"
import { LoginPage, RegisterPage } from "../screens"

export const RouterComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<h1 className="text-4xl">Home Page!!!</h1>} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
            <Route path="/tasks" element={<h1 className="text-4xl">Tasks Page!!!</h1>} />
        </Routes>
    )
}
