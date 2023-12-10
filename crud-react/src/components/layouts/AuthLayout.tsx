import { FC } from "react"


interface Props {
    children: React.ReactNode
}
export const AuthLayout: FC<Props> = ({ children }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
            <div className="flex flex-col items-center justify-center w-full max-w-md px-4 py-8 sm:bg-gray-800 sm:shadow-lg sm:rounded-lg">
                {/* <div className="flex flex-col items-center justify-center w-full max-w-md px-4 py-8 "> */}
                {children}
            </div>
        </div>
    )
}
