import { ReactElement, useCallback } from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from "../Components";
import { AddCartType, addPizzaToCart } from "../redux/redusers/cart/actions";
import { selectCart } from "../redux/redusers/cart/selectors";
import { setCategory, setSort } from "../redux/redusers/filters/actions";
import { selectFilters } from "../redux/redusers/filters/selectors";
import { DataType, fetchPizzas } from "../redux/redusers/pizza/actions"
import { selectPizza } from "../redux/redusers/pizza/selectors";
import { DispatchUp } from "../redux/store";

export type SortType={
  name:string,
  order:string,
  type:string
}

const categoryName=['Мясные','Вегетарианская','Гриль','Острые','Закытые']
const sortItems=[
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавит', type: 'name', order: 'asc' },
  ];
const Home:React.FC=()=>{
  
  const dispatch = DispatchUp()
  const {items,isLoaded} = useSelector(selectPizza)
  const filters = useSelector(selectFilters)
  const cart = useSelector(selectCart)


  useEffect(()=>{
    //@ts-ignore
    dispatch(fetchPizzas(filters))
  },[filters])

  const onSelectCategory=useCallback((index:number|null)=>{
    dispatch(setCategory(index))
  }, [])

  const onSelectType=useCallback((type:SortType)=>{
    dispatch(setSort(type))
  }, [])

  const addPizza = (obj:AddCartType) => {
    dispatch(addPizzaToCart(obj))
  }

    return(
        <div className="container">
          <div className="content__top">
            <Categories 
              categoryName={categoryName}
              onClickItem={onSelectCategory}
              activCategory={filters.category}
             />
            <SortPopup 
              activeSortType={filters.sortBy.type} 
              sortItems={sortItems} 
              onClickSort={onSelectType} 
            />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            { isLoaded 
              ? items.map((obj:DataType)=> <PizzaBlock 
                                            key={obj.id}
                                            addedCount={cart.items[obj.id] && cart.items[obj.id].items.length} 
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