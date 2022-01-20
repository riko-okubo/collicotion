import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        header: {
            backgroundColor: `#ADC4CF`
        },
        title: {
            color: `#FFF8E4`,
            textAlign:"center",
            fontFamily:"Comic Sans MS"
        }
    })
);

export const Header = () => {
    const classes = useStyles();
    return(
        <AppBar position="static"  className={classes.header}>
            <Toolbar variant="dense">
                <Typography variant="h6" className={classes.title}>
                    Riko's handmade
                </Typography>
            </Toolbar>
        </AppBar>
    );
}