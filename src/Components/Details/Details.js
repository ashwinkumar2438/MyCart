import React from "react";
import style from "./Details.module.css";

// Footer Component. 
const Details=(props)=>{

    return (
        <div className={style.detailbox}>
            <h5>Total Amount: {props.amount}</h5>
            <button onClick={props.checkout.bind(null,"checkout")}>Checkout</button>
            <h5>Quantity: {props.quantity}</h5>
           
        </div>
    )
}

export default Details;