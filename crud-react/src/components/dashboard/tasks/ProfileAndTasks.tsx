
import { UserProfile } from "../interfaces"
import { ProfileCard } from "./ProfileCard"
import { TaskList } from "./TaskList"

export const ProfileAndTasks = ({user}:{user:UserProfile}) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <ProfileCard user={user} />
            <TaskList />
        </div>
    )
}
