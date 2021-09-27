import React from "react";
import "../Style/style.css";
import { connect } from "react-redux";

const Mainmenu = (props) => {
  return (
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
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Mainmenu);
