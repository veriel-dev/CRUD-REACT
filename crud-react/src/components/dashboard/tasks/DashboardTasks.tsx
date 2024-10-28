
import { UserProfile } from "../interfaces"
import { ProfileAndTasks } from "./ProfileAndTasks"
import { StatsContent } from "./StatsContent"

export const DashboardTasks = ({user}:{user:UserProfile}) => {
    return (
        <>
            <StatsContent />
            <ProfileAndTasks user={user} />
        </>
    )
}
