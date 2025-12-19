import "@mui/material/styles";
import "@mui/material/Typography";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    title: React.CSSProperties;
    subtitle: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
    subtitle?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    title: true;
    subtitle: true;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    white: Palette['primary'];
  }
  interface PaletteOptions {
    white?: PaletteOptions['primary'];
  }
}
