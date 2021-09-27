import React from "react";
import "../Style/style.css";
import { connect } from "react-redux";
import { useEffect } from "react";
import { getTransaction } from "../states/transaction/actions";

const Mainmenu = (props) => {
  const { transactionHistory, getTransaction } = props;

  console.log("UASHDUHDS", transactionHistory);

  useEffect(() => {
    getTransaction();
  }, [getTransaction]);

  return transactionHistory ? (
    <div className="mainmenu">
      <div className="sideSection"></div>
      <div className="mainSection">
        <div className="topSection"></div>
        <div className="list">
          <table className="tableList">
            <tr>
              <th>Jumlah</th>
              <th>Saldo</th>
              <th>Category</th>
              <th>Tanggal</th>
              <th>Description</th>
            </tr>
          </table>
        </div>
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
  balance: state.balance,
});

const mapDispatchToProps = (dispatch) => ({
  getTransaction: () => dispatch(getTransaction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mainmenu);
