import React,{useEffect,useState} from 'react';
import './App.css';
import {Product,Details,Checkout} from "./Components";

function App() {
  
  let [data,setdata]=useState([]);
  let [totalAmount,setAmount]=useState(0);
  let [totalQuantity,setQuantity]=useState(0);
  let[page,setPage]=useState("home")
  useEffect(()=>{
    fetch(process.env.PUBLIC_URL+"/data.json").then(rawdata=>{
      return rawdata.json()
    }).then(data=>{
      console.log(data);
      setdata(data.items||[]);
    })
  },[])

  let addItem=(id)=>{
    let alldata=[...data];
    let itemdetails=alldata.find(a=>a.id===id);
    itemdetails.count++;
    let total=totalAmount;
    let quantity=totalQuantity;
    total=Number(total)+Number(itemdetails.price);
    quantity++;
    setdata(alldata);
    setAmount(total);
    setQuantity(quantity);

  };
  let removeItem=(id)=>{
    let alldata=[...data];
    let itemdetails=alldata.find(a=>a.id===id);
    if(itemdetails.count===0)return;
    itemdetails.count--;
    let total=totalAmount;
    let quantity=totalQuantity;
    total=Number(total)-Number(itemdetails.price);
    quantity--;
    setdata(alldata);
    setAmount(total);
    setQuantity(quantity);
  }
  let changePage=(val)=>{
    setPage(val)
  }
  if(page==="home")return (
    <div className="App">
      {data.map(item=><Product key={item.name} addmethod={addItem} removemethod={removeItem} itemdetails={{...item}}/>)}      
      <Details amount={totalAmount} quantity={totalQuantity} checkout={changePage}></Details>
    </div>
  );
  else return (
    <div className="App">
      <Checkout></Checkout>
    </div>
  )
}

export default App;
