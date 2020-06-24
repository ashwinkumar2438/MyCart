import React,{Fragment} from "react";
import style from "./Popup.module.css";
const Popup=(props)=>{


    return (

    <Fragment>
        <div className={style.popup}>
            <span className={style.closer} onClick={()=>{props.cleardata();props.closepop();}}>&#10008;</span>
            <h3 style={{color:"maroon"}}>Happy Shopping</h3>
            <h5 style={{color:"teal"}}>Rs {props.total} Amount Paid in full!</h5>
            <h5>See you again soon!!!</h5>
        </div>
        <div className={style.background} onClick={()=>{props.cleardata();props.closepop();}}></div>
    </Fragment>
    )
}

export default Popup;