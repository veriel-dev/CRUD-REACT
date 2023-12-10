import { FC } from "react";
import { EmailSvg, PasswordSvg, UserSvg } from "..";
import { Inputs } from "../../screens";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { InputErrors } from "./InputErrors";


interface Props {
    type: string
    label: string
    placeholder: string,
    name: "email" | "password" | "username"
    showIcon?: boolean
    register: UseFormRegister<Inputs>
    errors: FieldErrors<Inputs>
}
export const Input: FC<Props> = ({
    type,
    label,
    name,
    placeholder,
    showIcon,
    register,
    errors
}) => {
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
                                    ${errors[name] ? 'border-red-500 mb-0' : 'border-gray-500 mb-2'}

                                    input-form
                                `}
                                {...register(name)}
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
                                <div className="absolute top-[18px] left-2">
                                    <PasswordSvg />
                                </div>
                            )}
                            <input
                                type={type}
                                placeholder={placeholder}
                                className={`
                                 ${showIcon ? "px-8" : "px-4"}
                                 ${errors[name] ? 'border-red-500 mb-0' : 'border-gray-500 mb-2'}
                                 input-form
                                `}
                                {...register(name)}
                            />
                            <InputErrors errors={errors} name={name} />
                        </div>

                    </>
                )
            }

        </>
    )
}
