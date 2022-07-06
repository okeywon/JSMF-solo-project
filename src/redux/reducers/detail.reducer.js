const detailReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAIL':
            console.log("look here for detail reducer", action);
            return action.payload;
        default:
            return state;
    }
}

export default detailReducer;