import React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

const Interest = () => {
  return (
    <div>
      <div className="flex justify-center text-2xl">Step 3: Interest Rate</div>
      <div className="flex justify-center text-lg">Estimated Interest Rate</div>
      <div className="flex justify-center text-lg">
        Estimated annual interest rate
      </div>
      <div className="flex justify-center">
        <FormControl variant="filled" sx={{ m: 1, minWidth: 300 }}>
          <InputLabel className="flex justify-center" id="compound frequency">
            Rate
          </InputLabel>
          <OutlinedInput
            id="filled-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
      </div>

      <div className="flex justify-center text-lg">
        Interest rate variance range
      </div>
      <div className="flex justify-center text-lg">
        Range of interest rates (above and below the rate set above) that you
        desire to see results for.
      </div>
      <div className="flex justify-center">
        <FormControl variant="filled" sx={{ m: 1, minWidth: 300 }}>
          <InputLabel className="flex justify-center" id="compound frequency">
            Variance
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

export default Interest;
