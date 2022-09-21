import React from "react"
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories ({activCategory,categoryName,onClickItem}){
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

Categories.propTypes = {
   categoryName: PropTypes.arrayOf(PropTypes.string).isRequired,
   onClickItem: PropTypes.func
 };
 
 Categories.defaultProps = {
   activCategory: null,
   categoryName: [],
 };

export default Categories