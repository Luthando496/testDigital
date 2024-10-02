import React from 'react';


const Country =({currency,onChangeCurrency})=>{


    return(
        <article className="w-[250px] bg-white shadow-2xl rounded-xl px-3 py-1 flex items-center gap-3">
            <div className={`${currency === "USD" && "bg-red-500"} rounded-xl cursor-pointer w-[100%] text-center p-2 text-xl` }onClick={()=> onChangeCurrency("USD")}><span>USA</span></div>
            <div className={`${currency === "EUR" && "bg-red-500"} rounded-xl cursor-pointer w-[100%] text-center p-2 text-xl `}onClick={()=> onChangeCurrency("EUR")}><span>FRANCE</span></div>
        </article>
    )
}


export default Country;