import React, { useEffect, useState } from "react";
import { getExchanges } from "../../api";
import Exchange from "../../Components/Exchange";
import Loader from "../../Components/Loader";


var exchanges_array = [];

const Exchanges=()=>{
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    exchanges_array.length=0;
    async function Exc() {
    try {
      const { data: exchanges } = await getExchanges();
      const newPrice = exchanges.slice(0, 20);
      newPrice.map((np)=>{
        const ExDiv=Exchange(np);
        exchanges_array.push(ExDiv);
      })
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }
  Exc();
  },[])
  return(
    loading?<Loader/>:<>{exchanges_array}</>
  )
}

export default Exchanges;