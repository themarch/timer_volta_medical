import React from 'react';
import Websocket from 'react-websocket';
import styles from './clock_css.js';

class clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "time"
    };
}

  handleData(data) {
    this.setState({data}); //Change state for attribute the value of data.
  }

  render() {
    return (
      <div>
        <div style={styles.centered_image_container}>
          <img style={styles.centered_image} src="https://www.volta-medical.com/wp-content/uploads/2018/06/logo-volta-med-nobs-white.png" alt="volta_medical"></img>
        </div>
        <p style={styles.title_artificial}> ARTIFICAL INTELLIGENCE SERVING HEART RHYTM </p>
        <div style={styles.div_mission}>
          <Websocket url='ws://localhost:1234'
              onMessage={this.handleData.bind(this)}/>
          <p style={styles.mission}> MY MISSION </p>
          <p style={styles.copiryght}> © Théophile Marchand-Arvier</p>
          <p style={styles.timer}>{this.state.data}</p>
        </div>
      </div>
    );
  }
}
export default clock;
