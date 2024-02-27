import React, { ReactNode, MouseEventHandler } from "react"

interface ButtonProps {
    children: ReactNode | ReactNode[];
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({children, onClick}: ButtonProps) => {
    return <button onClick={onClick}>{children}</button>;
}

export default Button;
