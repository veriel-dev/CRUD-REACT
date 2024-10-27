import { UserProfile } from "../Dashboard"
import { ProfileAndTasks } from "./ProfileAndTasks"
import { StatsContent } from "./StatsContent"

export const DashboardTasks = ({user}:{user:UserProfile}) => {
    return (
        <>
            <StatsContent user={user} />
            <ProfileAndTasks user={user} />
        </>
    )
}
