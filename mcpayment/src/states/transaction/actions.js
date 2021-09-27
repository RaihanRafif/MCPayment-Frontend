import axios from "axios";

export const getTransaction = () => {
  const request = axios.get("http://localhost:8000/transaction/");

  return (dispatch) =>
    request.then((response) =>
      dispatch({
        type: "GET_TRANSACTION",
        payload: response.data.data,
      })
    );
};
