import { Database, Shield, Users } from "lucide-react"

export const StatsContent = () => {
    const statusUserStats = [
        {
            title: "Usuarios Activos",
            value: "1.274",
            msg: "+12% este mes",
            icon: Users,
            color: "text-blue-500",
            bg: "bg-blue-500/10"
        },
        {
            title: "Roles",
            value: "8",
            msg: "Roles configurados",
            icon: Shield,
            color: "text-green-500",
            bg: "bg-green-500/10"
        },
        {
            title: "Uso de API",
            value: "45.2k",
            msg: "Peticiones/día",
            icon: Database,
            color: "text-yellow-500",
            bg: "bg-yellow-500/10"
        }
    ]
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {
                    statusUserStats.map(({title, value, msg, icon:Icon, color, bg}, index) => (
                        <div className="bg-gray-800 rounded-lg shadow p-6" key={index}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-sm font-medium text-slate-400">{title}</p>
                                    <p className="text-2xl font-semibold text-white mt-2">{value}</p>
                                    <p className="text-sm font-medium text-green-500 mt-1">{msg}</p>
                                </div>
                                <div className={`rounded-lg ${bg} p-3`}>
                                    <Icon className={`h-5 w-5 ${color}`} />
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
    )
}
