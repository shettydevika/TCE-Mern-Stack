import React from 'react' 
import "./Header.css"
import "bootstrap/dist/css/bootstrap.min.css"
const Header = () => {
  return (
    <div id='border'>
      <h1 id="Name" className="text-center nt-4">
        Devika Shetty
      </h1><br />
        <img id="center" src="https://th.bing.com/th/id/OIP.zubvNsaIxKD9T5662YQa2gHaJ4?pid=ImgDet&rs=1.jpeg" alt="Devika Shetty" />
    </div>
  );
};

export default Header;