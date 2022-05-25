import React from "react"
import { BgLoginStyle } from "./style"

const BgLogin: React.FC<{ pTxt: string, btnTxt: string, func: any }> = ({ pTxt, btnTxt, func }) => {
    return (
        <BgLoginStyle className="bg-login">
            <div>
                <p>{pTxt}</p>
                <button id="btnCad" onClick={func}>{btnTxt}</button>
            </div>
        </BgLoginStyle>
    )
}

export default BgLogin