import { ADD_TO_CART, CLEAR_CART, CLEAR_ROW, DEC_PIZZA } from "./actions";

const initialState = {
    //объект в котором есть ключи и для каждого ключа массив объектов
    itemsInCart: {}, 
    totalPrice: 0, 
    totalCount: 0
}
const findEqualElemInCartRow = (initialArr, itemToAdd) => {
    const idxOfPlaceToAdd = initialArr.findIndex((arrItem) => 
        arrItem.type === itemToAdd.type && arrItem.size === itemToAdd.size)

    const itemToReplace = initialArr[idxOfPlaceToAdd]
 return {idxOfPlaceToAdd, itemToReplace}
}

const createArrayToReplace = (initialArr, itemToAdd) => {

    //const idxOfPlaceToAdd = initialArr.findIndex((arrItem) => 
        //arrItem.type === itemToAdd.type && arrItem.size === itemToAdd.size)

    //const itemToReplace = initialArr[idxOfPlaceToAdd]

    const {idxOfPlaceToAdd, itemToReplace} = findEqualElemInCartRow(initialArr, itemToAdd)

    if (idxOfPlaceToAdd !== -1) {
        return initialArr.map((initialArrElem,idx) => 
                        idx === idxOfPlaceToAdd
                        ?{...itemToAdd, 
                            rowPrice: itemToReplace.rowPrice + itemToAdd.rowPrice,
                            rowCount: itemToReplace.rowCount + itemToAdd.rowCount
                         }
                        : initialArrElem
                        )
    } else {
        return [...initialArr, itemToAdd]
    }
}

const createNewItemToAdd = ActPay => ({
    id: ActPay.id, 
    name: ActPay.name,
    imageUrl: ActPay.imageUrl, 
    size: ActPay.size, 
    type: ActPay.type, 
    price: ActPay.price,
    rowPrice: ActPay.price,
    rowCount: 1  
})

export const cartReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {

            const itemToAdd = createNewItemToAdd(action.payload);

            const key = action.payload.id;

            const initialArr = prevState.itemsInCart[key]

            const newPizzaItemArray = 
            ! initialArr
            ? [itemToAdd]
            : createArrayToReplace(initialArr, itemToAdd)
            //: [...prevState.itemsInCart[action.payload.id], action.payload]

            const updatedItemsObject = {
                ...prevState.itemsInCart,
                [action.payload.id]: newPizzaItemArray
            }
            
            return {
                ...prevState, 
                itemsInCart: updatedItemsObject, 
                totalPrice: prevState.totalPrice + action.payload.price || action.payload.rowPrice,
                //вариант со стрима:  
                //const arrayOfAllPizzas = [].concat.apply([], Object.values(updatedItemsObject)) -- вынести над return
                //totalPrice: arrayOfAllPizzas.reduce((sum, pizzaObj) => pizzaObj.price + sum, 0),
                
                totalCount: prevState.totalCount + 1
                //вариант со стрима: 
                //const arrayOfAllPizzas = [].concat.apply([], Object.values(updatedItemsObject)) -- вынести над return
                //totalCount: arrayOfAllPizzas.length
            }
        }
        case CLEAR_CART: {
            return {
                itemsInCart: {}, 
                totalPrice: 0, 
                totalCount: 0
            }
        }
        case CLEAR_ROW: {
            const itemsToDelete = action.payload;
            const key = action.payload.id;
            const initialArr = prevState.itemsInCart[key]
            const {idxOfPlaceToAdd : idxOfPlaceToDelete} = findEqualElemInCartRow(initialArr, itemsToDelete)
            const updatedRowArray = initialArr.filter((arrElem, idx) => idx !== idxOfPlaceToDelete )
            
            const updatedItemsObject = {
                ...prevState.itemsInCart,
                [key]: updatedRowArray
            }
            
            return {
                ...prevState, 
                itemsInCart: updatedItemsObject, 
                totalPrice: prevState.totalPrice - itemsToDelete.rowPrice,
                totalCount: prevState.totalCount - itemsToDelete.rowCount
            }
        }
        case DEC_PIZZA: {
            const itemToDecrease = action.payload;
            const key = action.payload.id;
            const initialArr = prevState.itemsInCart[key]
            const {idxOfPlaceToAdd : idxOfPlaceToDec} = findEqualElemInCartRow(initialArr, itemToDecrease)
            let updatedRowArray;
            if (itemToDecrease.rowCount === 1){
                updatedRowArray = initialArr.filter((arrElem, idx) => idx !== idxOfPlaceToDec )
            } else {
                updatedRowArray = initialArr.map((arrElem, idx) => 
                    idx === idxOfPlaceToDec ?
                     {...itemToDecrease, rowCount: itemToDecrease.rowCount - 1, rowPrice: itemToDecrease.rowPrice - itemToDecrease.price}
                     : {...arrElem})
            }

            const updatedItemsObject = {
                ...prevState.itemsInCart,
                [key]: updatedRowArray
            }
            
            return {
                ...prevState, 
                itemsInCart: updatedItemsObject, 
                totalPrice: prevState.totalPrice - itemToDecrease.price,
                totalCount: prevState.totalCount - 1
            }

        }

        default: return prevState
    }
} 

export default cartReducer;