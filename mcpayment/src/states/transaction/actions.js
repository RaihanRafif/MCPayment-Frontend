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

export const addTransaction = (transaction) => {
  const request = axios.post("http://localhost:8000/transaction/",transaction);

  return (dispatch) =>
    request
      .then((response) =>
        dispatch({
          type: "ADD_TRANSACTION",
          payload: response.data.data,
        })
      )
      .catch((error) => {
        alert("Data belum lengkap");
      });
};
