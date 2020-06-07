import React, { Component } from "react";
import { Grid, Cell, List, ListItemContent, ListItem } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Anthony Robles</h2>
            <img
              src="https://media-exp1.licdn.com/dms/image/C4E03AQEq88bm1U1qeA/profile-displayphoto-shrink_400_400/0?e=1596672000&v=beta&t=YI8Biky5RH4P5Ud3-6ppGzKonw3lp876KB_6Zfua4Tc" className='avatar-img2'
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
            University of Miami Coding Boot Camp graduate.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Oxygen'}}><i className="fa fa-phone-square" aria-hidden="true"/>(786)752-1487</ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Oxygen'}}><i className="fa fa-envelope" aria-hidden="true"/>robles305@gmail.com</ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Oxygen'}}><i className="fa fa-linkedin-square" aria-hidden="true"/><a href="https://www.linkedin.com/in/arobl034/" rel="noopener noreferrer" target="_blank">linkedin</a></ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Oxygen'}}><i className="fa fa-github" aria-hidden="true"/><a href="https://github.com/Arobl034" rel="noopener noreferrer" target="_blank">Arobl034</a></ListItemContent>
              </ListItem>
            </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
