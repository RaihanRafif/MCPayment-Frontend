import React from "react";
import "../Style/style.css";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { connect } from "react-redux";
import { useEffect } from "react";
import { getTransaction } from "../states/transaction/actions";

const Header = (props) => {
  const { transactionHistory, getTransaction } = props;

  console.log("UASHDUHDS", transactionHistory);

  useEffect(() => {
    getTransaction();
  }, [getTransaction]);

  return (
    <div className="header">
      <div className="balance">
        <h3>Balance</h3>
        <p>RP {transactionHistory.balance}</p>
      </div>
      <div className="buttonSection">
        <div className="addIncomes">
          <button>
            <AiFillPlusCircle />
          </button>
        </div>
        <div className="addExpenses">
          <button>
            <AiFillMinusCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  transactionHistory: state.transaction.transactionHistory,
  balance: state.balance,
});

const mapDispatchToProps = (dispatch) => ({
  getTransaction: () => dispatch(getTransaction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
