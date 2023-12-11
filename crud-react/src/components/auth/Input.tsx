import { useState } from "react";
import { EmailSvg, PasswordSvg, UserSvg } from "..";
import { FieldErrors, Path, UseFormRegister } from "react-hook-form";
import { InputErrors } from "./InputErrors";
import { InputsType } from "../../interfaces";



interface Props<T extends InputsType> {
    type: string
    label: string
    placeholder: string,
    name: keyof T,
    showIcon?: boolean
    register: UseFormRegister<T>
    errors: FieldErrors<T>
}
export const Input = <T extends InputsType>({
    type,
    label,
    name,
    placeholder,
    showIcon,
    register,
    errors
}: Props<T>) => {

    const [showPassword, setShowPassword] = useState(false)
    const handlePassword = () => setShowPassword(state => !state)
    return (
        <>
            {
                (type === "text" || type === "email") &&
                (
                    <>
                        <label className="text-sm font-bold text-gray-200 mt-2">{label}</label>
                        <div className="relative">
                            {showIcon && (
                                <div className="absolute top-[18px] left-2">
                                    {type === "text" && <UserSvg />}
                                    {type === "email" && <EmailSvg />}
                                </div>
                            )}
                            <input
                                type={type}
                                placeholder={placeholder}
                                className={`
                                    ${showIcon ? "px-8" : "px-4"}
                                    ${errors[name]?.message ? 'border-red-500 mb-0' : 'border-gray-500 mb-2'}

                                    input-form
                                `}
                                {...register(name as Path<T>)}
                            />
                            <InputErrors errors={errors} name={name} />
                        </div>

                    </>
                )
            }
            {
                (type === "password") &&
                (
                    <>
                        <label className="text-sm font-bold text-gray-200 mt-2">{label}</label>
                        <div className="relative">
                            {showIcon && (
                                <div className="absolute top-[18px] left-2" onClick={handlePassword}>
                                    <PasswordSvg showPassword={showPassword} />
                                </div>
                            )}
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder={placeholder}
                                className={`
                                 ${showIcon ? "px-8" : "px-4"}
                                 ${errors[name]?.message ? 'border-red-500 mb-0' : 'border-gray-500 mb-2'}
                                 input-form
                                `}
                                {...register(name as Path<T>)}
                            />
                            <InputErrors errors={errors} name={name} />
                        </div>

                    </>
                )
            }

        </>
    )
}
