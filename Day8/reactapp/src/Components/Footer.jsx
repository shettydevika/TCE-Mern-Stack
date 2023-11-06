import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const cardStyle = {
      border: '2px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      textAlign: 'center',
      boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f9f9f9',
      width: '300px', // Adjust the width as needed
      margin: '0 auto', // Center the card horizontally
    };

    return (
      <div style={cardStyle}>
        <hr />
        <h3>Contact</h3>
        <div>
          <b>Mob</b>
          <p>9876543210</p>
        </div>
        <div>
          <b>Email</b>
          <p>ds@gmail.com</p>
        </div>
      </div>
    );
  }
}

export default Footer;
