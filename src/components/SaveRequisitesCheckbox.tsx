import { Checkbox, FormControlLabel } from "@mui/material";

interface Props {
  label: string;
}

export const SaveRequisitesCheckbox = ({ label }: Props) => (
  <FormControlLabel
    control={<Checkbox name="save-requisites" size="small" />}
    label={label}
  />
);
