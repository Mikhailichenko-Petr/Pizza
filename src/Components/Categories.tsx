import React from "react"

interface CategoriesPropTypes{
  activCategory:null,
  categoryName:string[],
  onClickItem:(index:number|null)=>void
}

const Categories:React.FC<CategoriesPropTypes> = React.memo(function Categories ({activCategory,categoryName,onClickItem}){
      return(
             <div className="categories">
                     <ul>
                       <li className={activCategory === null ? 'active' : ''} onClick={()=>onClickItem(null)}>Все</li>
                       {
                       categoryName && categoryName.map((item,index) => <li
                        className={activCategory === index ? 'active' : ''}
                           onClick={()=>onClickItem(index)}
                           key={`${item}_${index}`}>{item}
                        </li>)
                       }
                     </ul>
             </div>
          )
})



export default Categories