import React from "react";
import { Link, useLocation } from "react-router-dom";

import logoSvg from "../scss/assets/img/pizza-logo.svg";
import ButtonCart from "./ButtonCart";

const Headers:React.FC=React.memo(()=> {

  const { pathname } = useLocation(); // позволяет обновить hash при переходе

  return (
    <div className="header">
      <div className="container">

        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logoSvg} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>

        <div className="header__cart">
            {pathname !== '/cart' && <ButtonCart />} 
        </div>
        
      </div>
    </div>
  );
})

export default Headers;
