import React, { Component } from "react";
import { Grid, Cell, List, ListItemContent, ListItem } from "react-mdl";

class About extends Component {
  render() {
    return (
      
        <div className="about-area section-padding">
         <Grid className="contact-grid">

              <Cell col={12}>
              
                <div class="animate__animated  animate__fadeInLeft">
                  <h1>
                    <span className="text-primary">I'm Anthony Robles</span>
                  </h1>
                  <p className="text-primary">
                    A Full-Stack Web Developer who has recently completed a certification
                    at the University of Miami. I have vast knowledge in
                    HTML5, CSS, Javascript, JQuery, Node.js, React.js, MySql, and MongoDB.
                    The work I provide is of highest quality, fully responsive, and tested in a wide range of devices.
                    I am commited to continuing learning while also working to build client responsive website that bring solutions to client needs.
                  </p>
                </div>
              
              </Cell>
          
          </Grid>
        </div>
     
    );
  }
}

export default About;
