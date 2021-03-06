import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled("div")`
  margin-bottom: 10px;
  text-decoration: underline;
`;
var a=0;
const Market = ({url, name,key} ) => {
  return(
 
  <Container key={a}>
    <a href={url} target="_blank">
      {name}
    </a>
  </Container>
)};

Market.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Market;
