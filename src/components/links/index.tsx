import React from "react"
import { Container } from "./style"

const Links: React.FC<{ text: string, href:string }> = ({ text, href })=> {
    return (
        <Container>
            <a href={href}>{text}</a>
            <span>|</span>
            <a href="#">Esqueci minha senha</a>
        </Container>
    )
}

export default Links