import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
  Link,
  Switch 
} from "react-router-dom";

import Mens from "./BuySubRoutes/Mens";
import Womens from "./BuySubRoutes/Womens";
import Childrens from "./BuySubRoutes/Childrens";
import Seasonal from "./BuySubRoutes/Seasonal";
import Clearance from "./BuySubRoutes/Clearance";

import styled from "styled-components";


const StyledLi = styled.li`
  color: rgb(173, 170, 170);
    font-weight: bold;
    font-size: 18px;
    text-decoration: none;
    padding: 10px;
    text-color:white;
    display: inline-block;
    background-color: #dddddd;
    padding-left:20px;
    padding-right:20px;


`;

 
const Buy = ({ match }) => {

  const navStyle ={
    marginTop:-20,
    zIndex: 7,
  }
  
    return (
      <div style={navStyle} > 
        <ul >
          <StyledLi><Link to={`${match.url}/Mens`} style={{ textDecoration: 'none',color: 'white' }}>Mens</Link></StyledLi>
          <StyledLi><Link to={`${match.url}/Womens`} style={{ textDecoration: 'none',color: 'white' }}>Womens</Link></StyledLi>
          <StyledLi><Link to={`${match.url}/Childrens`} style={{ textDecoration: 'none',color: 'white' }}>Childrens</Link></StyledLi>
          <StyledLi><Link to={`${match.url}/Seasonal`} style={{ textDecoration: 'none',color: 'white' }}>Seasonal</Link></StyledLi>
          <StyledLi><Link to={`${match.url}/Clearance`} style={{ textDecoration: 'none',color: 'white' }}>Clearance</Link></StyledLi>
        </ul>
            <Route path="/Buy/Mens" component={Mens}  />
            <Route path="/Buy/Womens" component={Womens}/>
            <Route path="/Buy/Childrens" component={Childrens}/>
            <Route path="/Buy/Seasonal" component={Seasonal}/>
            <Route path="/Buy/Clearance" component={Clearance}/>
      </div>

          
    );
  }

 
export default Buy;