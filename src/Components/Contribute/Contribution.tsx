import React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

const Contribution = () => {
  return (
    <div>
      <div className="flex justify-center text-2xl">Step 2: Contribute</div>
      <div className="flex justify-center text-lg">Monthly Contribution</div>
      <div className="flex justify-center text-lg">
        Amount that you plan to add to the principal every month, or a negative
        number for the amount that you plan to withdraw every month.
      </div>
      <div className="flex justify-center">
        <FormControl variant="filled" sx={{ m: 1, minWidth: 300 }}>
          <InputLabel className="flex justify-center" id="compound frequency">
            Contribution
          </InputLabel>
          <OutlinedInput
            id="filled-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
      </div>
      <div className="flex justify-center text-lg">Length of Time in Years</div>
      <div className="flex justify-center text-lg">
        Length of time, in years, that you plan to save.
      </div>
      <div className="flex justify-center">
        <FormControl variant="filled" sx={{ m: 1, minWidth: 300 }}>
          <InputLabel className="flex justify-center" id="compound frequency">
            Length
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

export default Contribution;
