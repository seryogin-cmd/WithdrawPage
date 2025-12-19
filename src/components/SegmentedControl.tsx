import { Button, Stack } from "@mui/material";

const options = ["Банки", "Наличные", "Курьер"];

export const SegmentedControl = () => (
  <Stack direction="row" gap={1}>
    {options.map((label, i) => (
      <Button key={label} variant={i === 0 ? "contained" : "outlined"}>
        {label}
      </Button>
    ))}
  </Stack>
);
