const voteReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_VOTE':
            console.log("look here for vote reducer", action);
            return action.payload;
        default:
            return state;
    }
}

export default voteReducer;