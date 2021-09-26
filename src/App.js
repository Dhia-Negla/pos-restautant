import './App.css';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GrNext, GrPrevious } from 'react-icons/gr'
import menutium from "./images/menutium.png"
import iconDel from "./images/delete_icon.png"
import { useState } from 'react';
import { datas } from "./components/menu"
import Popup from "./components/Popup"
import Footer from './components/Footer';
import ErrorBill from './components/ErrorBill/ErrorBill';
import DeleteItemPop from './components/deleteItemPop/DeleteItemPop';


function App() {

const [items, setItems]= useState([])
const [menu,setMenu]=useState([])
// const [categorie,setCategorie]=useState([])
const [pop, setPop]=useState(false)
const [selectedProduct, setSelectedproduct] = useState({name:"",price:0,qty:1,options:[],extra:[]})
const [invoice, setInvoice] = useState(0)
const [table, setTable] = useState(0)
const [popErr, setPopErr] = useState(false)
const [itemToDelete, setItemToDelete] = useState({})

var totalPayment=0
items.map((item)=> totalPayment=totalPayment+item.price*item.qty)
  
  return (
    <div className="grid-container">
      <DeleteItemPop 
        itemToDelete={itemToDelete} 
        setItemToDelete={setItemToDelete} 
        items={items}
        setItems={setItems}
      />
      <Popup
        items={items} 
        setItems={setItems}
        selectedProduct={selectedProduct} 
        setSelectedproduct={setSelectedproduct} 
        pop={pop} 
        setPop={setPop} />
      <div className="grid1">
        <img src={menutium} width="40" alt="logo" />
        {" "}
        <span >Restaurant point of sale</span>
        <span className="check">
            {(invoice!==0)?"Facture n°"+invoice : null}
            {/* <AiOutlineShoppingCart className="icon" /> */}
        </span>
        
        </div>
{/*       <div className="grid2">
        <span>FACTURE NO {invoice+" "}</span>
        <span className="selectedtable">{table===0? "TAKE OUT" :(" DINE IN | TABLE "+table)}</span>
      </div> */}
      <div className="grid3">
{/*         {datas.map((data) => (
            <Card 
            className="card"
            onClick={() => {
              setCategorie(datas[data.id-1].menu)
              setMenu([])}
            }
            hoverable
            cover={<img style={{objectFit: "cover"}} height="100px" width="152" alt="example" src={data.image} />}
          >
            <Meta title={data.name}/>
          </Card>
          ))} */}
          <GrPrevious className="catprev"/>
          <div className="catscroll">
                {datas.map((data) => (
/*           <Card 
          className="card"
          onClick={() => (
            setMenu(datas[data.id-1].dishes)
          )}
          hoverable
          cover={<img style={{objectFit: "cover"}} height="100px" width="152px" alt="example" src={data.image} />}
        >
          <Meta title={data.name}/>
        </Card> */
        <button onClick={() => setMenu(datas[data.id-1].dishes)}>{data.name}</button>
        ))}
        </div>
        <GrNext className="catnext" />
      </div>
      <div className="grid4">
         <div className="headReceipt">
           <span className="desc" >Description</span>
           <span className="price">Price</span>
           <span className="qty">Qty</span>
           <span className="amount">Amount</span>
           <span className="cancel">Cancel</span>
         </div>
         {items.map((item)=>(
           <div className="Receipt">
           <span className="rdesc" >{item.name}</span>
           <span className="rprice">{item.price}</span>
           <span className="rqty">{item.qty}</span>
           <span className="ramount">{item.price*item.qty}</span>
           <span onClick={() => setItemToDelete(item)} className="rcancel"><img src={iconDel} width="22" alt="logo" /></span>
         </div>
         ))}
      </div>
{/*       <div className="grid5">
      {categorie.map((data) => (
          <Card 
          className="card"
          onClick={() => (
            setMenu(categorie[data.id-1].dishes)
          )}
          hoverable
          cover={<img style={{objectFit: "cover"}} height="100px" width="152px" alt="example" src={data.image} />}
        >
          <Meta title={data.name}/>
        </Card>
        ))}
      </div> */}
      <div className="grid6">
      {menu.map((dishe) => (
/*               <Card 
                className="card"
                hoverable
                onClick={() => {
                  if (invoice===0) setPopErr(true) 
                  else {
                    setSelectedproduct({name:dishe.name,price:dishe.price,qty:1})
                    setPop(true)
                  }
                }

                }
                cover={<img style={{objectFit: "cover"}} height="122px" width="152px" alt="example" src={dishe.image} />}
              >
                <Meta style={{zIndex: 20}} title={dishe.name+" "+dishe.price + "dt"}/>
              </Card> */
              <div onClick={() => {
                if (invoice===0) setPopErr(true) 
                else {
                  setSelectedproduct({
                    name:dishe.name,
                    price:dishe.price,
                    qty:1,
                    options:dishe.options,
                    extra:dishe.extra,
                    ingrediants:dishe.ingrediants
                  })
                  setPop(true)
                }
              }}>
                <img style={{objectFit: "cover"}} height="132px" width="182px" alt="example" src={dishe.image} />
                <div className="dishname">{dishe.name/* +" "+dishe.price + "dt" */}</div>
              </div>
            ))}
      </div>
        <Footer totalPayment={totalPayment} invoice={invoice} table={table} items={items} setInvoice={setInvoice} setTable={setTable} setItems={setItems}/>
        <ErrorBill popErr={popErr} setPopErr={setPopErr} />

    </div>
  );

  
}

export default App;
