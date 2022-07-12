const commentReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_COMMENT':
            console.log("look here for comment reducer", action);
            return action.payload;
        default:
            return state;
    }
}

export default commentReducer;