import React, { useState } from 'react'
import "./footer.css"
import { AiOutlineShoppingCart, AiOutlineShop, AiFillShopping, AiOutlinePrinter, AiOutlineLogout } from "react-icons/ai"
import { MdPayment } from "react-icons/md" 
import { IoRestaurantOutline } from "react-icons/io5"
import { RiBillLine }  from "react-icons/ri"
import NewBillPopUp, { generateBill } from './NewBillPopUp/NewBillPopUp'
import DineInPopUp from './DineInPopUp/DineInPopUp'
import CheckOutPop from './CheckOutPop/CheckOutPop';
import BillList from './billList/BillList'

export default function Footer({setInvoice, setTable, setItems, items, table, invoice, totalPayment}) {
    const [newbill, setNewbill]= useState(false)
    const [tables, setTables]= useState(false)
    const [popCheck, setPopCheck] = useState(false)
    const [dineInClicked, setDineInClicked] = useState(false)
    const [deliveryClicked, setDeliveryClicked] = useState(false)
    const [billListPop, setBillList] = useState(false)

    const handleNew = () =>{
        setNewbill(true)
    }
    const handleDine =() =>{
        setTables(true)
        setDineInClicked(true)
        setDeliveryClicked(false)
    }

    const handlePrinter = () => {
    }

const handleDelivery =() =>{
    setInvoice(generateBill())
    setTable(0)
    setDineInClicked(false)
    setDeliveryClicked(true)
}

    return (
        <>
            <BillList billListPop={billListPop} setBillList={setBillList} />
            <CheckOutPop items={items} setItems={setItems} totalpayment={totalPayment} popCheck={popCheck} setPopCheck={setPopCheck} />
            <DineInPopUp setInvoice={setInvoice} invoice={invoice} table={table} items={items} tables={tables} setTables={setTables} setTable={setTable} setItems={setItems} />
            <NewBillPopUp newbill={newbill} setNewbill={setNewbill} setInvoice={setInvoice} />
            <div className="grid7">
                <button 
                    onClick={handleNew} 
                    className="butt"
                ><AiOutlineShoppingCart className="footericons"/> NEW</button>
                <button 
                    onClick={handleDine} 
                    className="butt"
                    style={dineInClicked?{backgroundColor:"#00ff80"}:null}
                ><AiOutlineShop className="footericons"/> DINE IN</button>
                <button 
                    onClick={handleDelivery} 
                    className="butt"
                    style={deliveryClicked?{backgroundColor:"#26d980"}:null}
                ><AiFillShopping className="footericons" /> TAKE OUT</button>
                <button className="butt"><IoRestaurantOutline className="footericons" /> K.O.T</button>
                <button onClick={handlePrinter} className="butt"><AiOutlinePrinter className="footericons" /> PRINTER</button>
                <button 
                    /* style={{backgroundColor:"red"}}  */
                    className="butt"
                ><AiOutlineLogout className="footericons" /> LOGOUT</button>
                <button onClick={() =>setBillList(true)} className="butt"><RiBillLine className="footericons" /> BILL LIST</button>
                <button 
                    onClick={() => setPopCheck(true)}  
                    className="totamount"
                ><MdPayment className="footericons" />{"Payer "+((totalPayment===0)?"0.000":totalPayment.toFixed(3)) +"dt"}</button>
            </div>
        </>
    )
}
