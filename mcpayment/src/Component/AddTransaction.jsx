import React, { useState } from "react";
import { connect } from "react-redux";
import { addTransaction } from "../states/transaction/actions";

const AddTransaction = (props) => {
  const { addTransaction } = props;

  const [Transaction, setTransaction] = useState({
    amount: 0,
    status: "income",
    category: "",
    description: "",
    title: "",
  });

  const onChangeField = (e) => {
    setTransaction({
      ...Transaction,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    addTransaction(Transaction);
  };
  return (
    <div className="AddTransaction">
      <h1>Add Transaction</h1>
      <form onSubmit={onSubmit}>
        <p>Title</p>
        <input
          type="text"
          name="title"
          maxLength="20"
          onChange={onChangeField}
          value={Transaction.title}
        />

        <p>Option</p>
        <select
          value={Transaction.status}
          name="status"
          onChange={onChangeField}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <p>Amount</p>
        <input
          type="number"
          name="amount"
          onChange={onChangeField}
          value={Transaction.amount}
        />
        <p>Category</p>
        <input
          type="text"
          name="category"
          onChange={onChangeField}
          value={Transaction.category}
        />
        <p>Description</p>
        <textarea
          className="input_desc"
          name="description"
          maxLength="100"
          rows="4"
          cols="33"
          value={Transaction.description}
          onChange={onChangeField}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTransaction: (transaction) => dispatch(addTransaction(transaction)),
});

export default connect(null, mapDispatchToProps)(AddTransaction);
