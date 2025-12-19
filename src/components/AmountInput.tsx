import {
  IconButton,
  Paper,
  Stack,
  Typography,
  Box,
  InputBase,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

interface Props {
  label: string;
  value: string;
  subtitle: string;
  name: string;
  subtitleRight?: boolean;
}

export const AmountInput = ({
  label,
  value,
  subtitle,
  name,
  subtitleRight,
}: Props) => (
  <Stack direction="column" spacing={1}>
    <Typography
      variant="subtitle"
      sx={() => ({
        textAlign: subtitleRight ? "right" : "left",
      })}
    >
      {subtitle}
    </Typography>
    <Paper>
      <Box>
        <Typography variant="caption">{label}</Typography>
        <Stack
          direction="row"
          alignItems="center"
          gap={1}
          justifyContent="space-between"
        >
          <IconButton>
            <RemoveIcon />
          </IconButton>
          <InputBase
            value={value}
            name={name}
            sx={{
              input: {
                fontSize: 14,
                fontWeight: 600,
                textAlign: "center",
              },
            }}
          />
          <IconButton>
            <AddIcon />
          </IconButton>
        </Stack>
      </Box>
    </Paper>
  </Stack>
);
