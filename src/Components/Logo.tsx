import React from "react";
import logoSvg from "../scss/assets/img/pizza-logo.svg";

const Logo:React.FC =()=>{

  console.log('gig')

      return(
        <div className="header__logo">
        <img width="38" src={logoSvg} alt="Pizza logo" />
        <div>
          <h1>React Pizza</h1>
          <p>самая вкусная пицца во вселенной</p>
        </div>
      </div>
      )
  }
  
  export default React.memo(Logo);