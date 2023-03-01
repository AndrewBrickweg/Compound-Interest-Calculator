import React, { useState } from "react";

const Investment = () => {
  const [initalValue, setInitialValue] = useState(0);

  return (
    <div className="containerItem">
      <div className="steps">Step 1: Initial Investment</div>
      <div className="content">
        <div className="description">
          <div>Initial Investment</div>
          <p>Amount of money you are starting with</p>
        </div>
        <input type="number" className="amounts" />
      </div>
    </div>
  );
};

export default Investment;
