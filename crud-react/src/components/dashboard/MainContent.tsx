import { DashboardTasks } from "./tasks"
import { AdminDashboard } from "./admin"
import { UserProfile } from "./interfaces"


export const MainContent = ({ user }: { user: UserProfile }) => {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <DashboardTasks user={user} />
            {
                user.role === "admin" && (
                    <AdminDashboard />
                )
            }
        </main>
    )
}
