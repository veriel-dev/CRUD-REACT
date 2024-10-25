import { ProfileAndTasks, StatsContent } from "./content"
import { UserProfile } from "./DashboardTask"


export const MainContent = ({user}:{user:UserProfile}) => {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <StatsContent user={user} />
            <ProfileAndTasks user={user}/>
        </main>
    )
}
