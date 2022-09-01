import React, { useState } from "react"


function Categories ({tip}){
   const [state,setState] = useState(null)
      console.log(state);
      return(
             <div className="categories">
                     <ul>
                       <li className={state === null ? 'active' : ''} onClick={()=>setState(null)}>Все</li>
                       {
                       tip && tip.map((item,index) => <li
                        className={state === index ? 'active' : ''}
                           onClick={()=> setState(index)}
                           key={`${item}_${index}`}>{item}
                        </li>)
                       }
                     </ul>
             </div>
          )
}

export default Categories