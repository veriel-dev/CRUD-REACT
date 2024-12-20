
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup/src/yup.js"


import { AuthLayout, Button, ButtonComeBackHome, Input, LogoAuth } from "../components"
import { schemaAuthLogin } from "../components/auth/validationSchema"
import { Link } from "react-router-dom"
import { InputsTypeLogin } from "../interfaces"
import { useAuthContext } from "../hooks/useAuthContext"


export const LoginPage = () => {
    const {login} = useAuthContext()
    const { register, handleSubmit, formState: { errors } } = useForm<InputsTypeLogin>({
        resolver: yupResolver(schemaAuthLogin),
        mode: "onBlur",
    })
    
    const onSubmit: SubmitHandler<InputsTypeLogin> = async (data) => login(data.email, data.password)
    return (
        <AuthLayout>
            {/* LOGO */}
            <div className="flex flex-col">
                <LogoAuth />
            </div>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                {/* Email */}
                <Input
                    type={"email"}
                    label={"Correo electrónico:"}
                    placeholder={"example@gmail.com"}
                    name="email"
                    showIcon
                    register={register}
                    errors={errors}
                />
                {/* Password */}
                <Input
                    type={"password"}
                    label={"Contraseña:"}
                    placeholder={"********"}
                    name="password"
                    showIcon
                    register={register}
                    errors={errors}
                />
                {/* Submit */}
                <Button style={"btn-primary"} text={"Iniciar Sesión"} type={"submit"} />

                {/* Links */}
                <div className="flex justify-center mt-4">
                    <div className="text-sm text-gray-400">
                        ¿No tienes una cuenta? <Link to={'/auth/register'} className="text-gray-200 font-bold hover:underline">Regístrate</Link>
                    </div>

                </div>
                <ButtonComeBackHome />
            </form>
        </AuthLayout>
    )
}
