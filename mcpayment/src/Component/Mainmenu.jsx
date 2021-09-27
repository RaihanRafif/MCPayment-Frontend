import React from "react";
import "../Style/style.css";
import { connect } from "react-redux";
import { useEffect } from "react";
import { getTransaction } from "../states/transaction/actions";
import AddTransaction from "./AddTransaction";

const Mainmenu = (props) => {
  const { transactionHistory, getTransaction } = props;

  useEffect(() => {
    getTransaction();
  }, [getTransaction]);

  return transactionHistory ? (
    <div className="main">
      <div className="mainmenu">
        <div className="mainSection">
          <div className="topSection"></div>
          <div className="list">
            <table className="tableList">
              <tr className="heading">
                <th>
                  <h2>Jumlah</h2>{" "}
                </th>
                <th>
                  <h2>Saldo</h2>
                </th>
                <th>
                  <h2>Category</h2>
                </th>
                <th>
                  <h2>Tanggal</h2>
                </th>
                <th>
                  <h2>Description</h2>
                </th>
              </tr>
              {transactionHistory.map((transaction) => (
                <tr>
                  <th>{transaction[0].amount}</th>
                  <th>{transaction[0].saldo}</th>
                  <th>{transaction[0].category}</th>
                  <th>{transaction[0].createdAt}</th>
                  <th>{transaction[0].description}</th>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
      <div className="sideTransaction">
        <AddTransaction />
      </div>
    </div>
  ) : (
    <div>
      <h2>Belum ada Transaksi</h2>
    </div>
  );
};

const mapStateToProps = (state) => ({
  transactionHistory: state.transaction.transactionHistory,
});

const mapDispatchToProps = (dispatch) => ({
  getTransaction: () => dispatch(getTransaction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mainmenu);
