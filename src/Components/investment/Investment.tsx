import { Interface } from "node:readline/promises";
import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

const Investment = () => {
  const [initalValue, setInitialValue] = useState(0);

  return (
    <div>
      <div className="flex justify-center text-2xl">
        Step 1: Initial Investment
      </div>

      <div className="flex justify-center text-lg">
        Amount of money that you have available to invest initially.
      </div>
      <div className="flex justify-center">
        <FormControl variant="filled" sx={{ m: 1, minWidth: 300 }}>
          <InputLabel className="flex justify-center" id="compound frequency">
            Initial
          </InputLabel>
          <OutlinedInput
            id="filled-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
      </div>
    </div>
  );
};

export default Investment;
