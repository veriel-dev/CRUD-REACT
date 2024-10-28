import { CheckCircle, Clock, XCircle } from "lucide-react"


interface StatusTaskStats {
    status: "completed" | "pending" | "overdue"
    value: number
    title: string
}
export const StatsContent = () => {
    const statusTaskStats: StatusTaskStats[] = [
        {
            status: "completed",
            value: 12,
            title: "Tareas Completadas"

        },
        {
            status: "pending",
            value: 24,
            title: "Tareas Pendientes"
        },
        {
            status: "overdue",
            value: 36,
            title: "Tareas vencidas"
        }
    ]
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {
                statusTaskStats.map((task, index) => (
                    <div className="bg-gray-800 rounded-lg shadow p-6" key={index}>
                        <div className="flex items-center">

                            {task.status === "completed" &&
                                (
                                    <div className="p-3 bg-green-100 rounded-full">
                                        <CheckCircle className="w-6 h-6 text-green-600" />
                                    </div>
                                )
                            }
                            {task.status === "pending" && (
                                <div className="p-3 bg-yellow-100 rounded-full">
                                    <Clock className="w-6 h-6 text-yellow-600" />
                                </div>
                            )}
                            {task.status === "overdue" && (

                                <div className="p-3 bg-red-100 rounded-full">
                                    <XCircle className="w-6 h-6 text-red-600" />
                                </div>

                            )}

                            <div className="ml-4">
                                <h4 className="text-sm font-medium text-gray-200">{task.title}</h4>
                                <p className="text-2xl font-semibold text-gray-400">{task.value}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
