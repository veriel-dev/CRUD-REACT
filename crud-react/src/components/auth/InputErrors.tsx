import { FieldErrors } from "react-hook-form"
import { InputsType } from "../../interfaces"


interface Props<T extends InputsType> {
    errors: FieldErrors<T>
    name: keyof T
}
export const InputErrors = <T extends InputsType>({ errors, name }: Props<T>) => {
    return (
        <>
            {
                errors[name]?.message && (
                    <span className="input-form-error">{String(errors[name]?.message)}</span>
                )
            }
        </>
    )
}
