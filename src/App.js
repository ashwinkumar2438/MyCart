import React,{useEffect,useState} from 'react';
import './App.css';
import {Product,Details,Checkout} from "./Components";

function App() {
  
  let [data,setdata]=useState([]);
  let [checkoutdata,setcheckoutdata]=useState([]);
  let [totalAmount,setAmount]=useState(0);
  let [totalQuantity,setQuantity]=useState(0);
  let[page,setPage]=useState("home")
  useEffect(()=>{

    // FETCH JSON DATA FROM PUBLIC FOLDER
    // keeping data stored in localstorage for offline caching.
    fetch(process.env.PUBLIC_URL+"/data.json").then(rawdata=>{
      return rawdata.json()
    }).then(data=>{
      console.log(data);
      localStorage.setItem("fallbackdata",JSON.stringify(data))
      setdata(data.items||[]);
    }).catch(()=>{
      if("fallbackdata" in localStorage){
      let localdata=JSON.parse(localStorage.getItem("fallbackdata"));
      setdata(localdata.items||[])
      }
    })
  },[])

  // update functionality to update item count and checkout details.
  let updateItem=(id,delta)=>{
    let alldata=[...data];
    let codata=[...checkoutdata];
    let coitem=codata.find(a=>a.id===id);
    let itemdetails=alldata.find(a=>a.id===id);
    if(itemdetails.count===0 && delta===-1)return;
    itemdetails.count=itemdetails.count+delta;
    if(coitem)coitem.count=coitem.count+delta;
    else codata.push({...itemdetails});
    let total=totalAmount;
    let quantity=totalQuantity;
    total=Number(total)+(Number(itemdetails.price)*delta);
    quantity=quantity+delta;
    codata=codata.filter(a=>a.count);
    setdata(alldata);
    setAmount(total);
    setQuantity(quantity);
    setcheckoutdata([...codata]);
  };
  // variable declared to change page state.
  let changePage=(val)=>{
    setPage(val)
  }

  // function to be called after buying product to reset all data.
  let clearData=()=>{
    let allitems=[...data];
    allitems.forEach(a=>a.count=0);
    setdata(allitems);
    setcheckoutdata([]);
    setAmount(0);
    setQuantity(0);
  }
  if(page==="home")return (
    <div className="App">
      {data.map(item=><Product key={item.name} updatemethod={updateItem} itemdetails={{...item}}/>)}      
      <Details amount={totalAmount} quantity={totalQuantity} checkout={changePage}></Details>
    </div>
  );
  else return (
    <div className="App">
      <Checkout data={checkoutdata} total={totalAmount} homeout={changePage} clearall={clearData}></Checkout>
    </div>
  )
}

export default App;
