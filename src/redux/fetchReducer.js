import { REQUEST, SUCCESS, FAILURE } from "./actions";

const initialState = {
    requesting: true, 
    success: false, 
    failure: false, 
    data: []
}

const fetchReducer = (prevState = initialState, action) => {
    
    switch (action.type) {
        case REQUEST: {
            return {
                ...initialState
            }
        }
        case SUCCESS: {
            return {
                requesting: false, 
                success: true, 
                failure: false, 
                data: action.payload
            }
        }
        case FAILURE: {
            return {
                ...initialState, 
                requesting: false,
                failure: true
            }
        }
        default: 
            return prevState;
    }

}

export default fetchReducer