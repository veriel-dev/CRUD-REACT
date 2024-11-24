import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export const FaqSection = () => {
    const faqs = [
        {
            question: "¿Cómo funciona el sistema de roles y permisos?",
            answer: "Nuestro sistema permite definir roles personalizados con diferentes niveles de acceso. Los administradores pueden asignar roles predefinidos (como Admin o User) o crear nuevos roles con permisos específicos. Cada usuario puede tener uno o varios roles, y los permisos se actualizan en tiempo real."
        },
        {
            question: "¿Qué tipos de métricas puedo monitorear?",
            answer: "El dashboard proporciona métricas clave como número de usuarios activos, tendencias de crecimiento mensual, uso de API (peticiones/día), estado de tareas (completadas, pendientes, vencidas) y estadísticas de autenticación. Todas las métricas se actualizan en tiempo real y pueden exportarse para análisis detallados."
        },
        {
            question: "¿Cómo puedo integrar el sistema con mis aplicaciones existentes?",
            answer: "Ofrecemos una API RESTful completa y SDKs para las principales plataformas. La integración incluye autenticación OAuth con servicios populares como Google y GitHub, y una documentación detallada de todos los endpoints disponibles. El proceso típico de integración toma menos de 30 minutos."
        },
        {
            question: "¿Ofrecen soporte técnico para la implementación?",
            answer: "Sí, proporcionamos soporte técnico completo a través de múltiples canales. Esto incluye documentación detallada, guías de implementación, soporte por correo electrónico con tiempo de respuesta garantizado de 24 horas, y asistencia directa para la configuración inicial del sistema."
        }
    ];
    return (
        <div className="mt-24">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-200">Preguntas Frecuentes</h2>
            <div className="max-w-3xl mx-auto">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
    )
}

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-4">
            <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-medium text-gray-200">{question}</span>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
            </button>
            {isOpen && (
                <div className="mt-2 text-gray-400">
                    {answer}
                </div>
            )}
        </div>
    )
}