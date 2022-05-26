import React from "react"
import { BtnForm } from "./style"



const Btn: React.FC<{ text: string }> = ({ text}) => {
    return <BtnForm className="ripple">{text}</BtnForm>
}

export default Btn