import { useEffect, useState } from 'react'
import Countries from "./Countries"

import data from './data.json'
import Restaurant from './Restaurant'
import Categories from './Categories'


function App() {
  let componentData = data;
  const [currency, setCurrency] = useState("USD")
  const [restaurant,setRestaurant] = useState(data[1])
  const [exchange,setExchange] = useState(null)
 



  const changeCurrency=(cur)=>{
    setCurrency(cur)

  }

  useEffect(()=>{
    const fetchCurrency = async()=>{

    try{

    const response = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_UAKX1gnVmfT06aRwdEAMkrEXgisbgYdhXTs0ghWD&currencies=${currency}`);

    const {data} = await response.json();

    setExchange(data[currency])

    
    }catch(err){
      console.log(err)
    }
  
  }

  fetchCurrency();
  },[currency])

  const ChangeCurrent=(index)=>{
    setRestaurant(data[index])
  }

  return (
    <main className="">
      <Countries currency={currency}  onChangeCurrency={changeCurrency} />
      <div className="main flex items-center gap-4">
      <Restaurant onChangeCurrent={ChangeCurrent}  restaurants={data} restaurant={data} />
      <Categories exchange={exchange} currency={currency} restaurantData={restaurant} />
      </div>
    </main>
  )
}

export default App
