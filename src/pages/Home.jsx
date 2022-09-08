import { useDispatch, useSelector } from "react-redux";
import {Categories, SortPopup } from "../Components";
import PizzaBlock from "../Components/PizzaBlock";
import { setCategory } from "../redux/actions/filters";

function Home(){
  
  const dispatch = useDispatch()

  const state = useSelector(({pizzas,filters})=>{
    return{
      items: pizzas.items,
      filters: filters
    }
  })

  const onSelectCategory=(index)=>{
    dispatch(setCategory(index))
  }
    return(
        <div className="container">
          <div className="content__top">
            <Categories 
              onClickItem={onSelectCategory}
              tip={['Мясные','Вегетарианская','Гриль','Острые','Закытые']}
             />
            <SortPopup tip={[
              {name:'популярности', type: 'popular'},
              {name:'цене', type: 'price'},
              {name:'алфавиту', type: 'alphabet'}
              ]} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              state.items.map((obj)=> <PizzaBlock key={obj.id} {...obj}  />)
            }
          </div>
        </div>
    )
}

export default Home