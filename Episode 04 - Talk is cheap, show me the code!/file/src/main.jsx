
import React from "react";
import ReactDOM  from 'react-dom/client';

/*
Header 
-Logo
-Nav
Body
-serach
-Card
Footer
-Conact
Address
*/
const Header = () =>{
  return (
    <div className="header">
      <div className="logo">
        <img className="img" src="https://t3.ftcdn.net/jpg/01/01/98/26/240_F_101982691_hUmuXT3tgjqosvhUDbBMuw8jX1kN7Zle.jpg" alt="logo" />
      </div>
      <div className="Nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Card</li>
      </ul>
      </div>
    </div>
  )
}

const AppLaout = () => {
  return (
    <>
    <Header/>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLaout/>);

