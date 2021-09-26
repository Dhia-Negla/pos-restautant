import React from 'react'
import "./newbillpopup.css"
import { BsFillQuestionCircleFill } from "react-icons/bs"

export function generateBill(){
    var d = new Date(); 
    var t = new Date().getTime();
    var randomnum = Math.floor(Math.random() * (1000 -  500000)) + 1000;
    randomnum = d.getFullYear() + d.getMonth()+1 + d.getDate() + randomnum; 
    randomnum = randomnum + t;
    return randomnum
}

export default function NewBillPopUp({newbill, setNewbill, setInvoice}) {

    const handleYes = () =>{
        setNewbill(false)
        setInvoice(generateBill())
    }
    
    const handleNo = () =>{
        setNewbill(false)
    }

    return (
        newbill ?
        <div className="background">
            <div className="popNewBill">
                <div className="question"><span style={{marginLeft:"20px"}}>Question</span></div>
                <div className="asking">
                    <BsFillQuestionCircleFill className="questionmark"/>
                    <span className="qqq">voulez-vous créer une nouvelle facture ?</span>
                </div>
                <div className="yesno">
                    <button onClick={handleYes}>OUI</button>
                    <button onClick={handleNo}>NON</button>
                </div>
            </div>
        </div> : null
    )
}
