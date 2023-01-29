import { useCallback } from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from "../Components";
import { addPizzaToCart } from "../redux/actions/cart";
import { setCategory, setSort } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas"



const categoryName=['Мясные','Вегетарианская','Гриль','Острые','Закытые']
const sortItems=[
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавит', type: 'name', order: 'asc' },
  ];
function Home(){
  
  const dispatch = useDispatch()

  const state = useSelector(({pizzas,filters,cart})=>{
    return{
      items: pizzas.items,
      isLoaded: pizzas.isLoaded,
      filters: filters,
      cart: cart
    }
  })

  useEffect(()=>{
    dispatch(fetchPizzas(state.filters))
  },[state.filters])

  const onSelectCategory=useCallback((index)=>{
    dispatch(setCategory(index))
    console.log(index,'category');
  }, [])

  const onSelectType=useCallback((type)=>{
    dispatch(setSort(type))
    console.log(type,'sort');
  }, [])

  const addPizza = (obj) => {
    dispatch(addPizzaToCart(obj))
  }

    return(
        <div className="container">
          <div className="content__top">
            <Categories 
              categoryName={categoryName}
              onClickItem={onSelectCategory}
              activCategory={state.filters.category}
             />
            <SortPopup 
              activeSortType={state.filters.sortBy.type} 
              type={sortItems} 
              onClickSort={onSelectType} 
            />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            { state.isLoaded 
              ? state.items.map((obj)=> <PizzaBlock 
                                            key={obj.id}
                                            addedCount={state.cart.items[obj.id] && state.cart.items[obj.id].items.length} 
                                            {...obj} 
                                            onClickAddPizza={addPizza} 
                                          />)
              : Array(12)
                .fill(0)
                .map((_,index) => <PizzaLoadingBlock key={index} />)
            }
          </div>
        </div>
    )
}

export default Home