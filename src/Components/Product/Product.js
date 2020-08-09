import React from "react";
import styles from "./Product.module.css";


const Product=(props)=>{

    let {mainbox,imagebox,contentbox,buttonsbox,discountbox}=styles;


    let itemdata=props.itemdetails;

    return (
        <div className={mainbox}>
            <div className={imagebox}>
                {(itemdata.imagesrc)?<img src={process.env.PUBLIC_URL+"/static/media/"+itemdata.imagesrc} />:<div>No Image!</div>}
            </div>
            <div className={contentbox}>
                <h3>{itemdata.title||""}</h3>
                <h5>{itemdata.name||""}</h5>
                <span>{itemdata.quantity||""}</span>
                <span>{itemdata.mrp?"MRP "+itemdata.mrp:null}</span>
                <span>{itemdata.price?"Rs "+itemdata.price:null}</span>
            </div>
            <div className={discountbox}>
                {itemdata.discount?`${itemdata.discount}% OFF`:null}
            </div>
            <div className={buttonsbox}>
                <button onClick={props.updatemethod.bind(null,itemdata.id,1)}>Add to Cart</button>
                <button onClick={props.updatemethod.bind(null,itemdata.id,-1)} disabled={(itemdata.count<1)?true:false}>-</button>
                <span>{itemdata.count}</span>
                <button onClick={props.updatemethod.bind(null,itemdata.id,1)}>+</button>

            </div>
        </div>
    )
}

export default Product;