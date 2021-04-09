import React, { useEffect, useState } from "react";
import { getCoins } from "../../api";
import Coin from "../../Components/Coin"
import Loader from "../../Components/Loader";

var Coins_array = [];
const Coins=()=>{
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    Coins_array.length=0;
    async function Cooo() {
    try {
      const { data: coins } = await getCoins();
      const newCoin = coins.slice(0, 20);
      newCoin.map((nc)=>{
        const NcDiv=Coin(nc)
        Coins_array.push(NcDiv);
      })
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }
  Cooo();
  },[])
  return(
    loading?<Loader/>:<>{Coins_array}</>
  )
}

export default Coins;