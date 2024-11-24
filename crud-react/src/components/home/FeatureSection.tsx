import { Users,  LucideIcon, LockKeyhole,  Clock } from "lucide-react"


interface TypeFeature {
    icon: LucideIcon
    title: string
    description: string
}
export const FeatureSection = () => {
    const features:TypeFeature[] = [
        {
            icon: LockKeyhole,
            title: "Control Total",
            description: "Gestiona usuarios, roles y permisos con facilidad. Monitorea el uso de la API y las métricas clave de tu aplicación."
        }, {
            icon: Users,
            title: "Gestión de Tareas",
            description: "Administra fácilmente los usuarios y sus permisos en tu aplicación."
        }, {
            icon: Clock,
            title: "Análisis en Tiempo Real",
            description: "Visualiza métricas clave como usuarios activos, uso de API y estado de las tareas en tiempo real."
        }
    ]
    return (
        <div className="grid md:grid-cols-3 gap-8 mt-24">
            {
                features.map(({ icon: Icon, title, description }, index) => (
                    <div className="p-6 bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow" key={index}>
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-200">{title}</h3>
                        <p className="text-gray-400">
                            {description}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}
