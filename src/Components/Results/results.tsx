import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const results = () => {
  return (
    <div className="flex justify-center space-x-4 mt-5 ">
      <Button variant="contained">Calculate</Button>
      <Button variant="outlined">Reset</Button>
    </div>
  );
};

export default results;
