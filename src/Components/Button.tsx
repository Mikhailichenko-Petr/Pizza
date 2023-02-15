import React from "react"

import classNames from "classnames"

type buttonType={
    onClick?:()=>void,
    className:string,
    outline?:boolean,
    children:any
}

const Button:React.FC<buttonType> = ({onClick,className,outline,children})=>{   
    return <button onClick={onClick} className={classNames('button',className,{
        'button--outline' : outline
    })}>{children}</button>
}

export default Button