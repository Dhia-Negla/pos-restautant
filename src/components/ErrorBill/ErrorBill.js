import React from 'react'
import "./errorbill.css"
import {MdError} from "react-icons/md"

export default function ErrorBill({popErr, setPopErr}) {
    return (
            popErr ?
            <div className="background">
                <div className="popbillerror">
                    <div className="err"><span style={{marginLeft:"20px"}}>Error</span></div>
                    <div className="error">
                        <MdError className="questionmark"/>
                        <span className="qqq">VEUILLEZ CRÉER UNE NOUVELLE FACTURE</span>
                    </div>
                    <div className="ok">
                        <button onClick={() => {setPopErr(false)}} >Ok</button>
                    </div>
                </div>
            </div> : null
    )
}
