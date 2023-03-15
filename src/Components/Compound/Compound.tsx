import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Compound = () => {
  return (
    <div>
      <div className="flex justify-center text-2xl">Step 4: Compound It</div>
      <div className="flex justify-center text-lg">Compound Frequency</div>
      <div className="flex justify-center text-lg">
        Times per year that interest will be compounded
      </div>
      <div className="flex justify-center">
        <FormControl variant="filled" sx={{ m: 1, minWidth: 300 }}>
          <InputLabel className="flex justify-center" id="compound frequency">
            Frequency
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="compound frequency"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Annually</MenuItem>
            <MenuItem value={1 / 2}>Semi-Annually</MenuItem>
            <MenuItem value={1 / 4}>Quarterly</MenuItem>
            <MenuItem value={1 / 12}>Monthly</MenuItem>
            <MenuItem value={1 / 365}>Daily</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default Compound;
