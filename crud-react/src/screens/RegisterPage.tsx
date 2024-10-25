
import { useForm, SubmitHandler, } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup/src/yup.js"


import { AuthLayout, Button, ButtonComeBackHome, Input, LogoAuth } from "../components"
import { schemaAuthRegister } from "../components/auth/validationSchema"
import { Link } from "react-router-dom"
import { InputsTypeRegister } from "../interfaces"

export const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<InputsTypeRegister>({
        resolver: yupResolver(schemaAuthRegister),
        mode: "onBlur",
    })
    const onSubmit: SubmitHandler<InputsTypeRegister> = data => console.log(data)
    return (
        <AuthLayout>
            {/* LOGO */}
            <div className="flex flex-col">
                <LogoAuth />
            </div>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                {/* UserName */}
                <Input
                    type={"text"}
                    label={"Nombre de Usuario:"}
                    placeholder={"John Doe"}
                    name="username"
                    showIcon
                    register={register}
                    errors={errors}
                />
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
                <Button style={"btn-primary"} text={"Registrarse"} type={"submit"} />

                {/* Link */}
                <div className="flex justify-center mt-4">
                    <div className="text-sm text-gray-400">
                        ¿Ya tienes una cuenta? <Link to={'/auth/login'} className="text-gray-200 font-bold hover:underline">Inicia sesión</Link>
                    </div>
                </div>
                <ButtonComeBackHome />
            </form>
        </AuthLayout>
    )
}
