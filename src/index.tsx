import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from "./theme/theme";
import App from "./app/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
