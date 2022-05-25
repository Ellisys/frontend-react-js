import React from "react"
import { BtnForm } from "./style"



const Btn: React.FC<{ text: string }> = ({ text}) => {
    return <BtnForm>{text}</BtnForm>
}

export default Btn