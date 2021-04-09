import React, { useEffect, useState } from "react";
import { getCoinMarkets } from "../../api";
import Loader from "../../Components/Loader";
import Market from "../../Components/Market"
/*export default class extends React.Component {
  state = {
    loading: true,
    markets: []
  };
  getMarkets = async () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    try {
      const { data: markets } = await getCoinMarkets(id);
      this.setState({ markets });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  };
  componentDidMount() {
    this.getMarkets();
  }
  render() {
    return <MarketsPresenter {...this.state} />;
  }
}*/
var market_array = [];
const MarketsPresenter = ( ma,a ) =>{
  
    const Market_div=(
        <Market
          key={a}
          url={ma.market_url}
          name={ma.exchange_name}
        />
      )
      market_array.push(Market_div)
      a=a+1;
      ;
}
  const Markets=(props)=>{
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
      market_array.length=0;
      const {
        match: {
          params: { id }
        }
      } = props;
      
      async function Ma() {
        try {
          var a=1;
          const { data: markets } = await getCoinMarkets(id);
          markets.map((mk)=>{

            MarketsPresenter(mk,a);
            a=a+1
          });
        } catch (e) {
          console.log(e);
        } finally {
          setLoading(false);
        }
      };
    
      Ma();
    },[])
    return(
      loading?<Loader/>:<>{market_array}</>
    )
  }
  export default Markets;