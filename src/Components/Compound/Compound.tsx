import React from "react";

const Compound = () => {
  return (
    <div className="containerItem">
      <div className="steps">Step 4: Compound It</div>
      <div className="content">
        <div className="description">
          <div>Compound Frequency</div>
          <div>Times per year that interest will be compounded</div>
        </div>
        <input type="number" className="amounts" />
      </div>
    </div>
  );
};

export default Compound;
