import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
  Switch,
  Link
} from "react-router-dom";
import Home from "./Components/Home";
import Buy from "./Components/Buy";
import About from "./Components/About";
import Header from "./Components/Header";
import Contact from "./Components/Contact";

import Mens from "./Components/BuySubRoutes/Mens";
import Womens from "./Components/BuySubRoutes/Womens";
import { Style } from "radium";


 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div id="container1">
          <Header/>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/Buy">Buy</NavLink></li>
            <li><NavLink to="/About">About Us</NavLink></li>
            <li><NavLink to="/Contact">Contact Us</NavLink></li>
          </ul>
          <div className="content">
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Buy" component={Buy}  />
            <Route path="/About" component={About}/>
            <Route path="/Contact" component={Contact}/>
            </Switch>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;