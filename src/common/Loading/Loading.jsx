import React from "react";
import Spinner from "../../assets/images/spinner-black.svg";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="Loading-container">
      <img src={Spinner} alt="Loading..." width="80px" />
    </div>
  );
};

export default Loading;
