import axios from 'axios';

export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS'; 
export const FAILURE = 'FAILURE';

export const request = () => ({
    type: REQUEST
})

export const success = data => ({
    type: SUCCESS,
    payload: data
})

export const failure = () => ({
    type: FAILURE
})

//export const sendRequest = () => {
//    return async (dispatch) => {
export const sendRequest = (category, sortBy) => async (dispatch) => {
        //npm install --include=dev json-server
        try {
            //скобки опяь у экшена забыла, ну!
            dispatch(request())
            //console.log(category, sortBy.toUpperCase())
            const response = await axios
            //из-за того что в packege.json добавили "proxy": " http://localhost:3001",",
            //можем убрать явное указание адреса сервера, обращение будлет происходить по умолчанию
            //.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=asc`)
            .get(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=asc`)
            if (!response.statusText === 'OK') {
                throw new Error('Error fetching data!')
            }
            dispatch(success(response.data))
        } catch (err) {
            dispatch(failure)
        }
        
    }


export const  SET_SORT_BY = 'SET_SORT_BY';
export const  SET_CATEGORY = 'SET_CATEGORY';

export const setSorting = sortType => ({
    type: SET_SORT_BY, 
    payload: sortType
})

export const setCategory = catIndex => ({
    type: SET_CATEGORY, 
    payload: catIndex
})


export const ADD_TO_CART = 'ADD_TO_CART'
export const CLEAR_CART = 'CLEAR_CART'
export const CLEAR_ROW = 'CLEAR_ROW'
export const DEC_PIZZA = 'DEC_PIZZA'

export const addPizzaToCart = (pizzaObj) => ({
    type: ADD_TO_CART, 
    payload: pizzaObj
})

export const clearCartAC = () => ({
    type: CLEAR_CART
})

export const clearRowAC = pizzaObj => ({
    type: CLEAR_ROW, 
    payload: pizzaObj
})

export const decPizzaAC = pizzaObj => ({
    type: DEC_PIZZA, 
    payload: pizzaObj
})