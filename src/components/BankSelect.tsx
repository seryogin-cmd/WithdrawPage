import { Paper, Stack, Typography, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";

export const BankSelect = () => (
  <Paper>
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Stack direction="row" gap={1} alignItems="center">
        <CurrencyRubleIcon
          fontSize="large"
          sx={{
            color: "#ffffff",
            backgroundColor: "#6685bc",
            borderRadius: "50%",
          }}
        />
        <Box>
          <Typography fontWeight={600} fontSize={18}>
            Альфа-банк cash-in
          </Typography>
          <Typography variant="subtitle">1 USDT = 61.55 RUR</Typography>
        </Box>
      </Stack>
      <ExpandMoreIcon />
    </Stack>
  </Paper>
);
