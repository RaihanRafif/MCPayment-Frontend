import React from "react";
import "../Style/style.css";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { connect } from "react-redux";
import { useEffect } from "react";
import { getTransaction } from "../states/transaction/actions";
import useRouter from 'use-react-router'

const Header = (props) => {
  const { getTransaction, balance } = props;

  useEffect(() => {
    getTransaction();
  }, [getTransaction]);

  return (
    <div className="header">
      <div className="balance">
        <h1>Balance</h1>
        <h3>RP {balance}</h3>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  transactionHistory: state.transaction.transactionHistory,
  balance: state.transaction.balance,
});

const mapDispatchToProps = (dispatch) => ({
  getTransaction: () => dispatch(getTransaction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
