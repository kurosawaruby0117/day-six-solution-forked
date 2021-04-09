import React, { useEffect, useState } from "react";

import { getCoinExchanges } from "../../api";
import CoinExchange from "../../Components/CoinExchange";
import Exchange from "../../Components/Exchange";
import Loader from "../../Components/Loader";

/*export default class extends React.Component {
  state = {
    loading: true,
    exchanges: []
  };
  getExchanges = async () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    try {
      const { data: exchanges } = await getCoinExchanges(id);
      this.setState({ exchanges });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  };
  componentDidMount() {
    this.getExchanges();
  }
  render() {
    return <CoinExchangesPresenter {...this.state} />;
  }
}*/
var Coins_Exchanges=[]
const CoinExchangesPresenter = (np,a) =>{
  
   const coin=(
    <CoinExchange key={a} {...np} />)
    Coins_Exchanges.push(coin)
   };
 
  const CoinExchanges=(props)=>{
    const {
      match: {
        params: { id }
      }
    } = props;
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
      Coins_Exchanges.length=0;
      async function Exc() {
      try {
        const { data: exchanges } = await getCoinExchanges(id);
        const newCoinsEx = exchanges.slice(0, 20);
        var a=0;
        newCoinsEx.map((np)=>{
          const ExDiv=CoinExchangesPresenter(np,a);
          Coins_Exchanges.push(ExDiv);
          a=a+1;
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
      loading?<Loader/>:<>{Coins_Exchanges}</>
    )
  }

  export default CoinExchanges;