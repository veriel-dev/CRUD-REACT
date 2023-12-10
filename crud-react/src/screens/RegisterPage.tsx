
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup/src/yup.js"
import * as yup from "yup"
import { AuthLayout, Button, Input, LogoAuth } from "../components"

export type Inputs = {
    username: string
    password: string
    email: string
}

const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
    email: yup.string().email().required(),
})

export const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(schema),
        mode: "onBlur",
    })
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data)
    return (
        <AuthLayout>
            {/* LOGO */}
            <div className="flex flex-col">
                <LogoAuth />
            </div>
            <form className="flex flex-col md:w-[350px] w-auto  mt-4 mb-4" onSubmit={handleSubmit(onSubmit)}>
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
            </form>
        </AuthLayout>
    )
}
