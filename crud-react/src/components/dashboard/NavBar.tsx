import { Bell, Settings, Shield } from "lucide-react"
import { Link } from "react-router-dom"
import { UserProfile } from "./interfaces"



export const NavBar = ({ user }: { user: UserProfile }) => {
    return (
        <nav className="bg-gray-800 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to={"/"} className="flex items-center space-x-2">
                        <Shield className="w-8 h-8 text-blue-600" />
                        <span className="text-xl font-bold text-gray-200">SecureAuth</span>
                    </Link>

                    <div className="flex items-center space-x-4">
                        <button className="p-2 text-gray-400 hover:text-gray-500">
                            <Bell className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-500">
                            <Settings className="w-5 h-5" />
                        </button>
                        <div className="flex items-center space-x-3">
                            <img
                                className="w-8 h-8 rounded-full"
                                src={"https://www.claudeusercontent.com/api/placeholder/40/40"}
                                alt={user.username}
                            />
                            <span className="text-sm font-medium text-gray-200">{user.username}</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
