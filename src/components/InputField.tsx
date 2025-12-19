import { Paper, InputBase, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { ReactNode } from "react";

interface Props {
  placeholder: string;
  name: string;
  header?: ReactNode;
}

export const InputField = ({ placeholder, name, header }: Props) => (
  <Paper>
    <Stack spacing={1}>
      {header}
      <Stack direction="row" alignItems="center">
        <InputBase fullWidth placeholder={placeholder} name={name} />
        <EditIcon />
      </Stack>
    </Stack>
  </Paper>
);
