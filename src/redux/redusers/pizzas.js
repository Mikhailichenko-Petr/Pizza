const initialState={
    items: [],
    isLoaded: false
}


const pizzas=(state = initialState, action)=> {
    console.log(action,'test');
    switch (action.type) {
        case "SET_PIZZAS":
            return{
                ...state,
                items: action.payload,
                isLoaded: true
            }
        case "SET_PIZZAS":
            return{
                ...state,
                isLoaded: action.payload
            }
        default:
            return state
    }
}

export default pizzas