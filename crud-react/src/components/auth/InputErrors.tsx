import { FC } from "react"
import { Inputs } from "../../screens"
import { FieldErrors } from "react-hook-form"


interface Props {
    errors: FieldErrors<Inputs>
    name: "email" | "password" | "username"
}
export const InputErrors: FC<Props> = ({ errors, name }) => {
    return (
        <>
            {
                errors[name]?.message && (
                    <span className="input-form-error">{errors[name]?.message}</span>
                )
            }
        </>
    )
}
