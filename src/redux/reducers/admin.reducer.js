const adminReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ADMIN':
      console.log("look here reducer", action);
      return action.payload;
    default:
      return state;
  }
}

export default adminReducer;