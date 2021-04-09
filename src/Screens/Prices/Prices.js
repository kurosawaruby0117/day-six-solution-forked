import React, { useEffect, useState } from "react";
import { getPrices } from "../../api";
import Loader from "../../Components/Loader";

var prices_array = [];
const Price_Com = (pr) => {
  const price_div = (
    <div key={pr.id}>
      <span>
        {pr.name} / {pr.symbol} : ${pr.quotes.USD.price}
      </span>
    </div>
  );
  prices_array.push(price_div);
};
const Price = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if(prices_array.length===0){
      prices_array.length=0;
    }
    async function Prices() {
      try {
        const { data: prices } = await getPrices();
        const newPrice = prices.slice(0, 20);
        newPrice.map((pr) => {
          Price_Com(pr);
        });
      } catch {
        console.log("error");
      } finally {
        setLoading(false);
      }
    }
    Prices();
  }, []);

  return loading ? <Loader /> : <>{prices_array}</>;
};

export default Price;
