import React from 'react'
import "./dineinpopup.css"
import { RiShoppingBasket2Line } from "react-icons/ri"
import { AiFillCloseSquare } from "react-icons/ai"
import { tablesInv } from '../menu'
import { generateBill } from '../NewBillPopUp/NewBillPopUp'

export default function DineInPopUp({setInvoice,invoice,tables, setTables, setTable, setItems, items,table}) {

    return (
        tables ?
        <div className="background">
            <div className="popDineIn">
                <div className="dinein">
                    <span style={{marginLeft:"20px"}}> DINE IN - VEUILLEZ SÉLECTIONNER LA TABLE</span>
                    <AiFillCloseSquare onClick={() => setTables(false)} className="closeI" />
                </div>
                <div className="tables">
                    {tablesInv.map(ta => 
                        <div onClick={() => {
                            setTable(ta.id);
                            setTables(false)
                            if(table >0){
                                tablesInv[table-1].tab=items
                                if(tablesInv[table-1].tab.length!==0)tablesInv[table-1].facture=invoice
                                else tablesInv[table-1].facture=0;
                            }
                            setItems(ta.tab)
                            if(ta.facture!==0)setInvoice(ta.facture)
                            else setInvoice(generateBill())
                        }
                            
                    } 
                    className="table"
                    style={ta.facture!==0?{backgroundColor:"red"}:null}><span className="tab"><RiShoppingBasket2Line/> {"Table "+ta.id}</span></div>
                    )}
                </div>
            </div>   
        </div> : null
    )
}
