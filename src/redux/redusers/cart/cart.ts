import { AddCartType } from "../../actions/cart";
import { ActionsTypes } from "../../type";

type GetTotoalSumType={
  items:AddCartType,
  totalPrice:number
}

export interface CartType{
  items:AddCartType,
  totalPrice:number,
  totalCount:number
}

const initialState:CartType={
    items: {},
    totalPrice: 0, /// общая сумма 
    totalCount: 0, /// количество пиц
}

const getTotalPrice =(arr:AddCartType[])=> 
 arr.reduce((sum:number,arr) => arr.price + sum,0)

const _get = (obj:GetTotoalSumType, path:string) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key) => {
      return val[key];
    }, obj[firstKey]);
  };

const getTotalSum = (obj:AddCartType, path:string) => {
    return Object.values(obj).reduce((sum, obj) => {
      const value = _get(obj, path);
      return sum + value;
    }, 0);
  };

const cart=(state = initialState, action:ActionsTypes)=> { 
  console.log(action,'cart')
    switch (action.type) {
        case "ADD_PIZZA_CART":{

            const currentPizzaItems = !state.items[action.payload.id]
                     ?[action.payload]
                     :[...state.items[action.payload.id].items, action.payload] 
            
            const newItems={
                ...state.items,
                    [action.payload.id]: {
                        items: currentPizzaItems,
                        totalPrice: getTotalPrice(currentPizzaItems)
                    }
            }
            
            const totalCount = getTotalSum(newItems, 'items.length')
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return{
                ...state,
                items: newItems,
                totalCount,
                totalPrice
            }
        }
        case "CLEAR_CART":{
            return{
                items: {},
                totalPrice: 0,
                totalCount: 0,
            }
        }
        case "REMOVE_CART_ITEM":{
            const newItems={
                ...state.items
            }
            const newTotalPrice = newItems[action.payload].totalPrice
            const newTotalCount = newItems[action.payload].items.length
            delete newItems[action.payload]
            return{
                ...state,
                items:newItems,
                totalPrice:state.totalPrice - newTotalPrice,
                totalCount:state.totalCount - newTotalCount
            }
        }
        case 'PLUS_CART_ITEM': {
            const newObjItems = [
              ...state.items[action.payload].items,
              state.items[action.payload].items[0],
            ];
            const newItems = {
              ...state.items,
              [action.payload]: {
                items: newObjItems,
                totalPrice: getTotalPrice(newObjItems),
              },
            };
      
            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');
      
            return {
              ...state,
              items: newItems,
              totalCount,
              totalPrice,
            };
          }
      
          case 'MINUS_CART_ITEM': {
            const oldItems = state.items[action.payload].items;
            const newObjItems =
              oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
            const newItems = {
              ...state.items,
              [action.payload]: {
                items: newObjItems,
                totalPrice: getTotalPrice(newObjItems),
              },
            };
      
            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');
      
            return {
              ...state,
              items: newItems,
              totalCount,
              totalPrice,
            };
          }

        default:
            return state
    }
}

export default cart