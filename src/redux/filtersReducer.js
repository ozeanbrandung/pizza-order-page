import {SET_CATEGORY, SET_SORT_BY} from './actions';

const initialState = {
    category: 0, 
    sortBy: 'popular'
}

const filtersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SORT_BY: {
            return {
                ...initialState, 
                sortBy: action.payload
            }
        }
        case SET_CATEGORY: {
            return {
                ...initialState, 
                category: action.payload
            }
        }
        default: 
            return state;
    }
}

export default filtersReducer
