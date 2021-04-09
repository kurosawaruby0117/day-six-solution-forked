import React, { useEffect, useState } from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getCoinDetail } from "../../api";
import Loader from "../../Components/Loader";
import CoinExchanges from "../CoinExchanges/CoinExchangesContainer";
import Markets from "../Markets/Markets";
const Title = styled("h1")``;

const Description = styled("p")`
  margin: 30px 0px;
`;

const KeyValueRow = styled("div")`
  margin-bottom: 5px;
`;

const Key = styled("span")`
  font-weight: 600;
`;

const Value = styled("span")``;

const InsideMenu = styled("div")`
  margin: 20px 0px;
`;

const List = styled("ul")`
  display: flex;
`;

const Item = styled("li")`
  margin-right: 20px;
  text-transform: uppercase;
  font-weight: 600;
  border: 2px solid #1abc9c;
  padding: 5px;
  border-radius: 3px;
  background-color: ${props => (props.active ? "#1abc9c" : "transparent")};
  color: ${props => (props.active ? "white" : "black")};
`;
var Coins_array = [];
const Coin_div=(coin)=>{
  var linnk=window.location.href;
  var pathname;
  linnk=linnk.split("/");
  var nnnnewlink="";
  for(var i=4;i<7;i++){
    nnnnewlink+="/"+linnk[i]
  }
  console.log(nnnnewlink)
  if(linnk.length>6){
    pathname=linnk[5]
  }
 
  return(
    <>
      <Title>
        {coin.name} / {coin.symbol}
      </Title>
      <Description>{coin.description}</Description>
      <KeyValueRow>
        <Key>Rank:</Key> <Value>{coin.rank}</Value>
      </KeyValueRow>
      <KeyValueRow>
        <Key>Open Source:</Key> <Value>{coin.open_source ? "Yes" : "No"}</Value>
      </KeyValueRow>
      <KeyValueRow>
        <Key>Proof Type:</Key> <Value>{coin.proof_type}</Value>
      </KeyValueRow>
      <KeyValueRow>
        <Key>Structure:</Key> <Value>{coin.org_structure}</Value>
      </KeyValueRow>
      <InsideMenu>
        <List>
          <Item active={nnnnewlink === `/coins/${coin.id}/markets`}>
            <Link to={`/coins/${coin.id}/markets`}>Markets</Link>
          </Item>
          <Item active={nnnnewlink === `/coins/${coin.id}/exchanges`}>
            <Link to={`/coins/${coin.id}/exchanges`}>Exchanges</Link>
          </Item>
        </List>
      </InsideMenu>
      <Route path="/coins/:id/markets" component={Markets} />
      <Route path="/coins/:id/exchanges" component={CoinExchanges} />
    </>
  )
}
const Coin = (props) => {
 
  const [coin,setCooin]=useState();
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    Coins_array.length=0;
    async function Cooo() {
    try {
      const {
        match: {
          params: { id }
        }
      } = props;
      const { data: coin } = await getCoinDetail(id);
      setCooin(coin)
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }
  Cooo();
  },[])
  return(
    loading?<Loader/>:<>{Coin_div(coin)}</>
  )
  
};

export default Coin;