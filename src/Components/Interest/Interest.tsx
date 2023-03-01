import React from "react";

const Interest = () => {
  return (
    <div className="containerItem">
      <div className="steps">Step 3: Interest Rate</div>
      <div className="content">
        <div className="description">
          <div>Estimated Interest Rate</div>
          <div>Your estimated annual interest rate</div>
        </div>
        <input type="number" className="amounts" />
      </div>
    </div>
  );
};

export default Interest;
