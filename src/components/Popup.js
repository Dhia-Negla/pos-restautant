import "./popup.css"
import {CgAdd} from "react-icons/cg"
import {BiMinusCircle} from "react-icons/bi"




export default function Popup({items,setItems,selectedProduct,setSelectedproduct, pop, setPop}) {

    var options=[]
    var extra=[]

    const handleOptions = (e) =>{
        options[e.target.name]=e.target.value

    }

    const handleExtra = (e) =>{
        if(e.target.checked) extra.push(e.target.value)
        else extra = extra.filter((item) => item!==e.target.value)
        console.log(extra);
    }

    const handleSubmit = () => {       //next part
        // const it = items.find(item => item.name===selectedProduct.name)
        // if(it===undefined) setItems([...items,selectedProduct])
        // else {
        //     const newItems=items.filter((i) => i.name !== it.name)
        //     it.qty=it.qty+selectedProduct.qty
        //     newItems.push(it)
        //     setItems(newItems)
        // }
        console.log(options);
        options.map(option => console.log(option))
        setPop(false)

    }

    return ( pop ?
        <div className="background">
            <div className="pop">
                <div className="pr"><span style={{marginLeft:"5px"}}>{selectedProduct.name} - quantité </span></div>
                <div className="dishoptions"> 
                    {/* <span>quantité: </span>
                    <span className="qqtyy">
                        <BiMinusCircle onClick={() => setSelectedproduct({...selectedProduct,qty:(selectedProduct.qty>0?selectedProduct.qty-1:0)})} size="50" /> 
                        <span className="cc">{selectedProduct.qty}</span>  
                        <CgAdd onClick={() => setSelectedproduct({...selectedProduct,qty:selectedProduct.qty+1})} size="50" />
                    </span> */}
                    <div>
                        <div>Options</div>
                        <div className="options">
                        {selectedProduct.options.map(opt => (
                            <div className="option">
                                <span className="optiontitle">{opt.name}</span>
                                {opt.choices.map(choice => (
                                    <div className="radiooption"><input onChange={handleOptions} type="radio" value={[choice.name,choice.price]} name={opt.name} /> {choice.name}</div>
                                ))}
                            </div>
                        ))}
                        </div>
                    </div>
                    <div>
                        <div>Extra</div>
                        <div className="options">
                            {selectedProduct.extra.map(opt => (
                                <div className="option">
                                    <div className="radiooption"><input onChange={handleExtra} type="checkbox" value={[opt.name,opt.price]} name="extra" /> {opt.name}</div>
                                </div>
                            ))}
                            </div>
                    </div>
                    <div>
                        <div>Ingridiants</div>
                        <div className="options">
                            {selectedProduct.ingrediants.map(opt => (
                                <div className="option">
                                    <div className="radiooption"><input type="checkbox" checked={true} value={opt.name} name="ingerediants" /> {opt.name}</div>
                                </div>
                            ))}
                            </div>
                    </div>
                </div>
                <div>
                    <button onClick={handleSubmit} className="cnf">confirmer</button>
                    <button onClick={() => setPop(false)} className="cnl">annuler</button>
                </div>
            </div>
        </div> : null
    )
}
