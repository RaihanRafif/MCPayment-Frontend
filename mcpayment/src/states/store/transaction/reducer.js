const initialState = {
  balance: 0,
  transactionHistory: [],
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TRANSACTION":
      return {
        ...state,
        todos: action.payload,
      };

    default:
      return state;
  }
};

export default transactionReducer;
