import React, { Component } from "react";
import {
    Link
  } from "react-router-dom";
  

class About extends Component {
    render(){
        return(
        <div className="about">
        <div><Link to="/">Home</Link></div>
        <h2>About</h2>
<h3> With Ez Bnb our goal is that are clients love each trip that they book!</h3>
<h3> Booking a trip is quick and easy!</h3>

<small>

Copyright (c) 2021 EZBNB

</small>
        </div>
        )
    }

}

export default About