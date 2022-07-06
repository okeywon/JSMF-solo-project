const adminReducer = (state = {}, action) => {
    switch (action) {
        case 'SET_ADMIN':
          return action.payload;
        default:
          return state;
    }
}

export default adminReducer;