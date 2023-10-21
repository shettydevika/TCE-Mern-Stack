import React from 'react';
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <div className='card-container'>
      <div className='card'>
        <h1 className="text-center mt-4" >
          Devika Shetty
        </h1>
        <img className="card-image" src="https://th.bing.com/th/id/OIP.zubvNsaIxKD9T5662YQa2gHaJ4?pid=ImgDet&rs=1.jpeg" alt="Devika Shetty" />
      </div>
    </div>
  );
};

export default Header;
