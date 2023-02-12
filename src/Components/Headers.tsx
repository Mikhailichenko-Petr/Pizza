import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


import ButtonCart from "./ButtonCart";
import Logo from "./Logo";

const Headers:React.FC=React.memo(()=> {
  const { pathname } =  useLocation(); // позволяет обновить hash при переходе


  return (
    <div className="header">
      <div className="container">

        <Link to="/">
          <Logo/>
        </Link>

        <div className="header__cart">
            {pathname !== '/cart' && <ButtonCart />} 
        </div> 
        
      </div>
    </div>
  );
})

export default Headers;
