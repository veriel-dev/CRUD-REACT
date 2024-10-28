import { UserProfile } from "../interfaces"


export const ProfileCard = ({user}:{user:UserProfile}) => {
    return (
        <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg shadow">
                <div className="p-6">
                    <div className="text-center">
                        <img
                            className="mx-auto h-20 w-20 rounded-full"
                            src={"https://www.claudeusercontent.com/api/placeholder/40/40"}
                            alt={user.username}
                        />
                        <h2 className="mt-4 text-xl font-bold text-gray-200">{user.username}</h2>
                        <p className="text-sm text-gray-400">{user.role.toUpperCase()}</p>
                    </div>
                    <div className="mt-6 border-t border-gray-200 pt-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-400">Email</span>
                            <span className="text-sm text-gray-500">{user.email}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
