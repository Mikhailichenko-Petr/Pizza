import {Categories, SortPopup} from "../Components";
import PizzaBlock from "../Components/PizzaBlock";

function Home({data}){
  console.log(data);
    return(
        <div className="container">
          <div className="content__top">
            <Categories tip={['Мясные','Вегетарианская','Гриль','Острые','Закытые']} />
            <SortPopup tip={[
              {name:'популярности', type: 'popular'},
              {name:'цене', type: 'price'},
              {name:'алфавиту', type: 'alphabet'}
              ]} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              data.map((obj)=> <PizzaBlock key={obj.id} {...obj}  />)
            }
          </div>
        </div>
    )
}

export default Home