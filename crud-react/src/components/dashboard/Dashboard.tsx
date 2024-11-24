
import { useAuthContext } from "../../hooks/useAuthContext";
import { MainContent } from "./MainContent";
import { NavBar } from "./NavBar"


export const DashboardTask = () => {
    const {user} = useAuthContext()
    if (user === null  || user === undefined) return;
    return (
        <div className="min-h-screen bg-gray-900">
            <NavBar user={user}/>
            <MainContent user={user} />
        </div>
    )
}


