import React, { FC, ReactNode, MouseEventHandler } from "react"

interface ButtonProps {
    children: ReactNode | ReactNode[];
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button:FC<ButtonProps> = ({children, onClick}) => {
    return <button onClick={onClick}>{children}</button>;
}

export default Button;
