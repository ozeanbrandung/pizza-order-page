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
            .get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=asc`)
            console.log(response.data)
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