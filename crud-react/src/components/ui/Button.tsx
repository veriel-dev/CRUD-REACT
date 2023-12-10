import { FC } from 'react'


interface Props {
    style?: string
    text: string
    type?: "submit" | "button"
}
export const Button: FC<Props> = ({ style, type, text }) => {
    return (
        <button className={style} type={type}>
            {text}
        </button>
    )
}
