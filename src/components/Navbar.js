import React, { Component } from "react";

class Navbar extends Component{
    render() {
        return (
            <div>
              <ul id="nav">
                <ol><a href="#">Home</a></ol>
                <ol><a href="#">About</a></ol>
                <ol><a href="#">FAQ</a></ol>
                <ol><a href="#">Contact</a></ol>
              </ul>
            </div>
        );
    }
}

export default Navbar