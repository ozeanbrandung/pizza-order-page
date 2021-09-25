export const cartReducer = (prevState, action) => {
    switch (action.type) {
        case 'ADD': {
            return {
                prevState
            }
        }
        default: return prevState
    }
} 

export default cartReducer;
