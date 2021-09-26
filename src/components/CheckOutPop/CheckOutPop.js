import React, { useRef, useState } from 'react'
import "./checkoutpop.css"
import jsPDF from 'jspdf'
import { AiFillCloseSquare } from "react-icons/ai"

export default function CheckOutPop({items ,setItems, popCheck, setPopCheck, totalpayment}) {

    const [especes, setEspeces] = useState("00000")
    const [amoutToPay, setAmountToPay] = useState(totalpayment)
    const discount = useRef(0)

    const handleDiscount = () =>{
        setAmountToPay(totalpayment-totalpayment*discount.current.value/100)
    }

    const handlePay = () => {
        setItems([])
        setPopCheck(false)
    }

    const handlePrint = () => {
        var doc = new jsPDF()
        doc.setFontSize(20)
        doc.text("RESTAURANT", 20, 10);
        doc.setFontSize(15)
        doc.text("CAFE-RESTO", 27, 16);
        doc.text("TEL: 25 557 253", 25, 24);
        doc.text("Table: 20",5,38)
        doc.text("-----------------------------------------",5,52)
        doc.text("-----------------------------------------",5,53)
        var today = new Date()
        const date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
        const time = today.getHours() + ':' + today.getMinutes()
        doc.setFontSize(12)
        doc.text(date,48,38)
        doc.text(time,73,38)
        doc.setFontSize(13)
        doc.text("Qte   Article                       Montant",5,48)
        var i= 58
        items.map((item)=>{
            doc.text(item.qty.toString(),5,i)
            doc.text(item.name,17,i)
            doc.text((item.price*item.qty).toFixed(3).toString(),60,i)
            i=i+10
            return item
        })
        if (discount.current.value!==0) doc.text("Remise       "+discount.current.value.toString()+"%",5,i+10)
        doc.setFontSize(9)
        doc.text("----------------------------------------------------------------------",5,i)
        doc.setFontSize(20)
        doc.text("TOTAL             "+amoutToPay.toFixed(3).toString(),5,i+20)
        /* doc.save("a4.pdf"); */
        doc.autoPrint();
        doc.output('dataurlnewwindow');
    }

    return (
        popCheck?
            <div className="background">
                <div className="checkpop">
                    <div className="checking">
                        <span style={{marginLeft:"14px"}}>CHECK OUT</span>
                        <AiFillCloseSquare onClick={() => setPopCheck(false)} size="40" className="closecheck" />
                    </div>
                    <div className="discount">
                        <div className="gr">
                            <div>
                                <span>Montant dû</span>
                                <input value={totalpayment.toFixed(3)} className="checkinput" type="text"/>
                            </div>
                            <div>
                                <span>Remise</span>
                                {/* <input className="checkinput" type="text"/> */}
                                <input onChange={handleDiscount} ref={discount} className="checkinput" type="number"/>
                            </div>
                            <div>
                                <span>Montant Totale</span>
                                <input value={amoutToPay.toFixed(3)} className="checkinput" type="text"/>
                            </div>
                            <div>
                                <span>Espèces</span>
                                <input value={parseFloat(especes).toFixed(3)} className="checkinput" type="text"/>
                            </div>
                            <div>
                                <span>A rendre</span>
                                <input value={parseFloat(especes)>=amoutToPay?(parseFloat(especes)-amoutToPay).toFixed(3):""} className="checkinput" type="text"/>
                            </div>
                        </div>
                        <div className="tapping">
                            <div onClick={() => setEspeces(especes+"7")} className="number">7</div>
                            <div onClick={() => setEspeces(especes+"8")} className="number">8</div>
                            <div onClick={() => setEspeces(especes+"9")} className="number">9</div>
                            <div onClick={handlePrint} className="print">PRINT</div>
                            <div onClick={() => setEspeces(especes+"4")} className="number">4</div>
                            <div onClick={() => setEspeces(especes+"5")} className="number">5</div>
                            <div onClick={() => setEspeces(especes+"6")} className="number">6</div>
                            <div onClick={() => setEspeces(especes+"1")} className="number">1</div>
                            <div onClick={() => setEspeces(especes+"2")} className="number">2</div>
                            <div onClick={() => setEspeces(especes+"3")} className="number">3</div>
                            <div onClick={() => setEspeces(especes.slice(0, -1) )} className="c">C</div>
                            <div onClick={handlePay} className="c">PAY</div>
                            <div onClick={() => setEspeces(especes+"00")} className="number">00</div>
                            <div onClick={() => setEspeces(especes+"0")} className="number">0</div>
                            <div onClick={() => setEspeces(especes+".")} className="number">.</div>
                        </div>
                    </div>
                        
                </div>   
            </div>
        : null
    )
}
