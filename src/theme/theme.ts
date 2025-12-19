import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
  palette: {
    background: {
      default: "#f3f3f3",
      paper: "#fcd502",
    },
    text: {
      primary: "#040b11",
      secondary: "#8E8E93",
    },
    grey: {
      900: "#bdbdbd",
    },
    white: {
      main: "#FFFFFF",
      contrastText: "#040b11",
    },
  },

  typography: {
    fontFamily: "SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif",
    title: {
      fontSize: 18,
      lineHeight: "18px",
      fontWeight: 600,
    },
    caption: {
      display: "inline-block",
      fontSize: 12,
      lineHeight: "16px",
      fontWeight: 600,
      width: "100%",
      textAlign: "center",
      color: "#aaaaaa",
    },
    subtitle: {
      fontSize: 12,
      lineHeight: "18px",
      fontWeight: 600,
      color: "#9e9e9e",
    },
  },
});

export const theme = createTheme({
  ...baseTheme,
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          title: "h2",
          body1: "p",
          body2: "p",
          caption: "span",
          subtitle: "p",
        },
      },
    },

    MuiStack: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: 10,
          boxShadow: "none",
          width: "100%",
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor: baseTheme.palette.background.default,
          padding: 4,
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          background: baseTheme.palette.white.main,
          borderRadius: 12,
          fontSize: 18,
          color: baseTheme.palette.text.primary,
        },
        input: {
          "&::placeholder": {
            color: baseTheme.palette.text.primary,
            opacity: 1,
          },
        },
      },
    },

    MuiRadio: {
      styleOverrides: {
        root: {
          padding: 4,
          color: baseTheme.palette.text.primary,
          "&.Mui-checked": {
            svg: {
              backgroundColor: baseTheme.palette.background.paper,
              color: baseTheme.palette.text.primary,
              borderRadius: "50%",
            },
          },
        },
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 4,
          color: baseTheme.palette.grey[900],
          "&.Mui-checked": {
            color: baseTheme.palette.background.paper,
          },
        },
      },
    },

    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: 0,
          flexDirection: "row-reverse",
        },
        label: {
          fontSize: 15,
          color: baseTheme.palette.grey[900],
          fontWeight: 600,
          textAlign: "right",
        },
      },
    },

    MuiFormGroup: {
      styleOverrides: {
        root: {
          columnGap: "20px",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 10,
          fontWeight: 400,
          border: "none",
          color: baseTheme.palette.text.primary,
          boxShadow: "none",
          backgroundColor: baseTheme.palette.white.main,
          "&:hover": {
            border: "none",
          },
        },
        contained: {
          color: baseTheme.palette.white.main,
          backgroundColor: baseTheme.palette.text.primary,
          pointerEvents: "none",
        },
      },
    },
  },
});
