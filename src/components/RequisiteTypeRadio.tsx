import { RadioGroup, FormControlLabel, Radio } from "@mui/material";

export const RequisiteTypeRadio = () => (
  <RadioGroup row value="card" >
    <FormControlLabel value="card" control={<Radio />} label="Номер карты" />
    <FormControlLabel
      value="contract"
      control={<Radio />}
      label="Номер договора"
    />
  </RadioGroup>
);
