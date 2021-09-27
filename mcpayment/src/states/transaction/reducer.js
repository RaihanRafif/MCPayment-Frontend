const initialState = {
  balance: 0,
  transactionHistory: [],
};
const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TRANSACTION":
      const transaction = action.payload.transaction;
      return {
        ...state,
        transactionHistory: Object.keys(transaction).map((key) => [
          transaction[key],
        ]),
        balance: action.payload.balance,
      };

    case "ADD_TRANSACTION":
      return {
        ...state,
        balance: action.payload.balance,
      };

    default:
      return state;
  }
};

export default transactionReducer;
