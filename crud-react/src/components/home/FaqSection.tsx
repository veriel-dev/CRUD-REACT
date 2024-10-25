import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
    
export const FaqSection = () => {
    const faqs = [
        {
            question: "¿Cómo funciona el proceso de autenticación?",
            answer: "Nuestro sistema utiliza JWT (JSON Web Tokens) para manejar la autenticación de forma segura. Una vez que el usuario inicia sesión, se genera un token que se utiliza para verificar su identidad en las solicitudes posteriores."
        },
        {
            question: "¿Qué medidas de seguridad implementan?",
            answer: "Implementamos múltiples capas de seguridad, incluyendo encriptación de contraseñas con bcrypt, protección contra ataques XSS y CSRF, y monitoreo continuo de actividades sospechosas."
        },
        {
            question: "¿Puedo integrar autenticación con redes sociales?",
            answer: "Sí, ofrecemos integración con varios proveedores de autenticación social como Google, Facebook y GitHub. Esto proporciona una experiencia de inicio de sesión más conveniente para tus usuarios."
        },
        {
            question: "¿Ofrecen soporte técnico?",
            answer: "Sí, proporcionamos soporte técnico completo a través de nuestro sistema de tickets y documentación detallada. También contamos con un foro de comunidad activo."
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

const FAQItem = ({ question, answer }:{question:string, answer: string}) => {
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
)}