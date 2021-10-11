import { createTheme } from "@material-ui/core";

const arcBlue = "#127299";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";
export default createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    h2: {
      fontWeight: 700,
      fontSize: "2.5rem",
      color: `${arcBlue}`,
      lineHeight: 1.5,
    },
    h3: {
      fontSize: "2.5rem",
      color: arcBlue,
    },
    h4: {
      fontSize: "1.75rem",
      color: `${arcBlue}`,
      fontWeight: 700,
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Raleway",
      color: arcBlue,
      lineHeight: 1,
    },
    subtitle1: {
      fontSize: "1.2rem",
      fontWeight: 300,
      color: `${arcGrey}`,
    },
    body1: {
      fontSize: "1.25rem",
      color: arcGrey,
      fontWeight: 300,
    },
    subtitle2: {
      color: "white",
      fontSize: "1.25rem",
      fontWeight: "300",
    },
    learnButton: {
      borderColor: `${arcBlue}`,
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      color: `${arcBlue}`,
      // fontFamily:"Roboto",
      fontWeight: "bold",
    },
    tab: {
      textTransform: "none",
      fontWeight: "700",
      fontSize: "1rem",
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: arcBlue,
        fontSize: "1rem",
      },
    },
    MuiInput: {
      root: {
        color: arcGrey,
        fontWeight: 300,
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${arcBlue}`,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${arcBlue}`,
        },
      },
    },
  },
});
