import React from 'react'
import { RiErrorWarningLine } from "react-icons/ri"
import "./deleteitempop.css"

export default function DeleteItemPop({setItemToDelete, itemToDelete, setItems, items}) {

    const handleNo =() =>{
        setItemToDelete({})
    }

    const handleYes = () =>{
        setItems(items.filter((it) => it.name !== itemToDelete.name))
        setItemToDelete({})
    }

    return (
        <>
            {Object.keys(itemToDelete).length!==0 ?
                <div className="background">
                    <div className="popNewBill">
                        <div style={{backgroundColor: "#FFCC00"}} className="question">
                            <span style={{marginLeft:"20px"}}>Attention</span>
                        </div>
                        <div className="asking">
                            <RiErrorWarningLine style={{color: "#FFCC00"}} className="questionmark"/>
                            <span className="qqq">Vous allez supprimer {itemToDelete.name}</span>
                        </div>
                        <div>
                            <button className="btn1" onClick={handleYes}>Confirmer</button>
                            <button className="btn2" onClick={handleNo}>Annuler</button>
                        </div>
                    </div>
                </div> 
            : null}
        </>
    )
}
