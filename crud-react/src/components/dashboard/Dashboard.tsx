
import { UserProfile } from "./interfaces";
import { MainContent } from "./MainContent";
import { NavBar } from "./NavBar"


export const DashboardTask = () => {
    const user: UserProfile = {
        name: "Ana García",
        email: "ana.garcia@ejemplo.com",
        role: "Desarrollador Senior",
        avatar: "https://www.claudeusercontent.com/api/placeholder/40/40",
        taskStats: {
            completed: 24,
            pending: 12,
            overdue: 3
        }
    };
    return (
        <div className="min-h-screen bg-gray-900">
            <NavBar user={user}/>
            <MainContent user={user} />
        </div>
    )
}


