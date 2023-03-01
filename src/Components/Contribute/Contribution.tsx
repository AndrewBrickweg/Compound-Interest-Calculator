import React from "react";

const Contribution = () => {
  return (
    <div className="containerItem">
      <div className="steps">Step 2: Contribution</div>
      <div className="content">
        <div className="description">
          <div> Monthly Contribution</div>
        </div>
        <div className="amounts">
          <input type="number" />
        </div>
        <div className="description">Length of time</div>{" "}
        <input type="number" className="amounts" />
      </div>
    </div>
  );
};

export default Contribution;
