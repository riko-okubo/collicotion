import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    popup: {
      backgroundColor: "#FFFFFF",
      outline: "none",
      boxShadow: "0px 6px 4px 2px rgba(0, 0, 0, 0.25)",
      width: "fit-content",
      height: "70%",
      justifyContent: "center",
      textAlign: "center",
      margin: "5% auto",
      padding: "10px 5%",
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        height: "50%",
        marginTop: "20%",
      },
      "& h2": {
        padding: "16px",
        margin: 0,
        "& span": {
          fontSize: "32px",
          [theme.breakpoints.down("sm")]: {
            fontSize: "24px",
          },
          background: "-webkit-linear-gradient(left, #ff26fb, #00b3ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },
      },
      "& img": {
        width: "auto",
        height: "70%",
        margin: 0,
        padding: "6px",
        border: "2px solid #D9D9D9",
      },
    },
    closeButton: {
      "& Button": {
        position: "absolute",
        fontSize: "16px",
        left: "85%",
        top: "4%",
        textDecorationColor: "#C4C4C4",
        [theme.breakpoints.down("sm")]: {
          left: "80%",
        },
      },
    },
    openPageButton: {
      "& Button": {
        padding: "10px",
        color: "#C4C4C4",
        margin: "auto",
      },
    },

    top: {
      height: "80%",
      position: "relative",
      margin: 0,
      overflow: "hidden",
    },
    top_background: {
      opacity: "70%",
      objectFit: "cover",
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        width: "130%",
      },
    },
    curtain: {
      position: "absolute",
      width: "35vw",
      height: "100%",
      backgroundColor: "#FFFFFF",
      opacity: "50%",
      top: 0,
      left: "15%",
    },
    title: {
      fontFamily: "Caveat, cursive, sans-serif",
      color: "#666A71",
      width: "100%",
      textAlign: "center",
      position: "absolute",
      top: "50%",
      justifyContent: "center",
      "& h1": {
        fontSize: "6em",
        margin: 0,
      },
      "& p": {
        fontSize: "2.5em",
        margin: 0,
      },
      [theme.breakpoints.down("sm")]: {
        "& h1": {
          fontSize: "2.2em",
          margin: 0,
        },
        "& p": {
          fontSize: "0.8em",
          margin: 0,
        },
      },
    },

    body: {
      color: "#666A71",
      margin: "6em auto",
      overflowX: "hidden",
      "& button": {
        width: "100%",
        margin: "5em 0",
      },
      [theme.breakpoints.down("sm")]: {
        margin: "1em auto",
        "& button": {
          width: "80%",
          display: "block",
          margin: "1em auto 1.5em auto",
        },
      },
    },
    content: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "&:hover": {
        filter: "opacity(60%)",
        transform: "scale(1.1)",
        transition: "0.3s",
      },
      "&:active": {
        filter: "opacity(60%)",
      },
      "& img": {
        margin: "0 3em",
        width: "25em",
        height: "auto",
        borderRadius: "50%",
        transition: "0.3s",
      },
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "column",
        "& img": {
          margin: "0 1em",
          width: "12em",
          height: "auto",
          borderRadius: "50%",
        },
      },
    },
    sub_title: {
      textTransform: "none",
      textAlign: "center",
      width: "30em",
      "& h3": {
        margin: 0,
        fontFamily: "Caveat, cursive, sans-serif",
        fontSize: "7em",
        color: "#666A71",
      },
      "& p": {
        margin: 0,
        fontFamily: "Klee One, Kokoro, cuesive",
        fontSize: "1.2em",
        color: "#BDBDBD",
      },
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
        width: "15em",
        "& h3": {
          fontFamily: "Caveat, cursive, sans-serif",
          fontSize: "3em",
          color: "#666A71",
        },
        "& p": {
          margin: 0,
          fontFamily: "Klee One, Kokoro, cuesive",
          fontSize: "0.8em",
          color: "#BDBDBD",
        },
      },
    },
  })
);
