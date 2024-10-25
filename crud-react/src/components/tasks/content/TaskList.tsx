import { Calendar, Filter, List } from "lucide-react";


interface Task {
    id: number;
    title: string;
    description: string;
    dueDate: string;
    status: 'pending' | 'completed' | 'overdue';
    priority: 'high' | 'medium' | 'low';
}


export const TaskList = () => {

    const tasks: Task[] = [
        {
            id: 1,
            title: "Implementar autenticación OAuth",
            description: "Integrar login con Google y GitHub",
            dueDate: "2024-10-30",
            status: "pending",
            priority: "high"
        },
        {
            id: 2,
            title: "Actualizar documentación API",
            description: "Documentar nuevos endpoints",
            dueDate: "2024-10-28",
            status: "completed",
            priority: "medium"
        },
        {
            id: 3,
            title: "Fix bug en registro",
            description: "Corregir validación de formulario",
            dueDate: "2024-10-24",
            status: "overdue",
            priority: "high"
        },
    ];
    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'high':
                return 'text-red-500';
            case 'medium':
                return 'text-yellow-500';
            case 'low':
                return 'text-green-500';
            default:
                return 'text-gray-500';
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed':
                return 'bg-green-100 text-green-800';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'overdue':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };
    return (
        <div className="lg:col-span-3">
            <div className="bg-gray-800 rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-600">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-medium text-gray-200">Tareas Asignadas</h2>
                        <div className="flex space-x-2">
                            <button className="p-2 text-gray-400 hover:text-gray-500">
                                <Filter className="w-5 h-5" />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-gray-500">
                                <List className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="divide-y divide-gray-600">
                    {tasks.map((task) => (
                        <div key={task.id} className="p-6 hover:bg-gray-700">
                            <div className="flex items-center justify-between">
                                <div className="flex-1">
                                    <h3 className="text-sm font-medium text-gray-200">{task.title}</h3>
                                    <p className="mt-1 text-sm text-gray-400">{task.description}</p>
                                    <div className="mt-2 flex items-center space-x-2">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                                            {task.status}
                                        </span>
                                        <span className={`text-sm ${getPriorityColor(task.priority)}`}>
                                            {task.priority}
                                        </span>
                                    </div>
                                </div>
                                <div className="ml-4 flex items-center space-x-4">
                                    <div className="flex items-center text-sm text-gray-500">
                                        <Calendar className="w-4 h-4 mr-1" />
                                        {task.dueDate}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
