import React from "react";
import "../Style/style.css";
import {  BsPlusCircleFill} from "react-icons/bs";
import { AiFillMinusCircle,AiFillPlusCircle } from "react-icons/ai";

const Header = () => {
  return (
    <div className="header">
      <div className="balance">
        <h3>Balance</h3>
        <p>Rp 500</p>
      </div>
      <div className="buttonSection">
        <div className="addIncomes"><button><AiFillPlusCircle/></button></div>
        <div className="addExpenses"><button><AiFillMinusCircle/></button></div>
      </div>
    </div>
  );
};

export default Header;
