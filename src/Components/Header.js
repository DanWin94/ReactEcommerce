import React, { Component } from "react";
 
class Header extends Component {
  render() {
 
    var headerStyle = {
        fontFamily: "sans-serif",
        fontSize: 40,
        fontWeight: "bold",
        padding: 13,
        margin: 0
      };

    return (
      <div style={headerStyle}>
       <header>
        XP ATTIRE
       </header>
      </div>
    );
  }
}
 
export default Header;
