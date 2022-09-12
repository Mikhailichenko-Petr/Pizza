import { useCallback } from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from "../Components";
import { setCategory } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas"


const categoryName=['Мясные','Вегетарианская','Гриль','Острые','Закытые']
const sortItems=[
  {name:'популярности', type: 'popular'},
  {name:'цене', type: 'price'},
  {name:'алфавиту', type: 'alphabet'}
  ];
function Home(){
  
  const dispatch = useDispatch()



  useEffect(()=>{
    dispatch(fetchPizzas())
  },[])


  const state = useSelector(({pizzas,filters})=>{
    return{
      items: pizzas.items,
      isLoaded: pizzas.isLoaded,
      filters: filters
    }
  })

  const onSelectCategory=useCallback((index)=>{
    dispatch(setCategory(index))
  }, [])

    return(
        <div className="container">
          <div className="content__top">
            <Categories 
              categoryName={categoryName}
              onClickItem={onSelectCategory}
              
             />
            <SortPopup tip={sortItems} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            { state.isLoaded 
              ? state.items.map((obj)=> <PizzaBlock key={obj.id} {...obj} />)
              : Array(10).fill(<PizzaLoadingBlock />)
            }
          </div>
        </div>
    )
}

export default Home