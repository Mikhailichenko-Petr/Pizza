import React, { useState } from "react"


function Categories ({tip,onClickItem}){
   const [state,setState] = useState(null)
      
   const setIndex=(index)=>{
      onClickItem(index)
      setState(index)
   }

      return(
             <div className="categories">
                     <ul>
                       <li className={state === null ? 'active' : ''} onClick={()=>setIndex(null)}>Все</li>
                       {
                       tip && tip.map((item,index) => <li
                        className={state === index ? 'active' : ''}
                           onClick={()=>setIndex(index)}
                           key={`${item}_${index}`}>{item}
                        </li>)
                       }
                     </ul>
             </div>
          )
}

export default Categories