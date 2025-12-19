import { Box, Stack, Typography } from "@mui/material";

const labels = ["min", "50%", "75%", "max"];

interface Props {
  activeSections?: number;
}

export const ProgressSections = ({ activeSections = 2 }: Props) => (
  <Stack>
    <Stack direction="row" spacing={1}>
      {labels.map((_, index) => (
        <Box
          key={index}
          flex={1}
          height={10}
          borderRadius={10}
          bgcolor={index < activeSections ? "white.contrastText" : "white.main"}
        />
      ))}
    </Stack>

    <Stack direction="row">
      {labels.map((label) => (
        <Box key={label} flex={1} textAlign="center">
          <Typography variant="caption">{label}</Typography>
        </Box>
      ))}
    </Stack>
  </Stack>
);
