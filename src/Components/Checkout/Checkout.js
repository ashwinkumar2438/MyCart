import React,{useState} from "react";
import style from "./Checkout.module.css";
import {Popup} from "../index";
//Component for checkout page 
const Checkout=(props)=>{


    let [popit,setPop]=useState(false);
    return (
    <div className={style.maindiv}>
        {props.total?(<table className={style.table}>
            <thead>
                <tr>
                    <th>Sr No.</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>
                <tbody>
                        {props.data.map((item,index)=>{
                        return <tr key={item.id}>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.count}</td>                
                                <td>{Number(item.price)*item.count}</td>                
                            </tr>
                        })}
                        <tr><td colSpan={4}>Total Amount</td><td>Rs. {props.total}</td></tr>
                </tbody>
        </table>):<div>Nothing in Cart</div>}
        <div>
        <button className={style.buy} onClick={()=>{setPop(true);}} disabled={props.total===0}>Buy</button>
        <button onClick={props.homeout.bind(null,"home")}>Back</button>
        </div>
        {(popit)?<Popup total={props.total} cleardata={props.clearall} closepop={()=>{setPop(false)}}/>:null}
    </div>
    )
}

export default Checkout;