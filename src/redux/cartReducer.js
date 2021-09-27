import { ADD_TO_CART } from "./actions";

const initialState = {
    //объект в котором есть ключи и для каждого ключа массив объектов
    items: {}, 
    totalPrice: 0, 
    totalCount: 0
}


export const cartReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {

            const newPizzaItemArray = !prevState.items[action.payload.id] 
            ? [action.payload]
            : [...prevState.items[action.payload.id], action.payload]

            const updatedItemsObject = {
                ...prevState.items,
                [action.payload.id]: newPizzaItemArray
            }
            
            return {
                ...prevState, 
                items: updatedItemsObject, 
                totalPrice: prevState.totalPrice + action.payload.price,
                //вариант со стрима:  
                //const arrayOfAllPizzas = [].concat.apply([], Object.values(updatedItemsObject)) -- вынести над return
                //totalPrice: arrayOfAllPizzas.reduce((sum, pizzaObj) => pizzaObj.price + sum, 0),
                
                totalCount: ++prevState.totalCount
                //вариант со стрима: 
                //const arrayOfAllPizzas = [].concat.apply([], Object.values(updatedItemsObject)) -- вынести над return
                //totalCount: arrayOfAllPizzas.length
            }
        }
        default: return prevState
    }
} 

export default cartReducer;
