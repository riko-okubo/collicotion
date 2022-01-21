import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

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

interface Props {
    children: React.ReactElement;
}

type PropsWindw = {
    window?: () => Window;
}

const HideOnScroll = ({children}: Props) => {
    const trigger = useScrollTrigger();
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
}

export const Header = (props:PropsWindw) => {
    const classes = useStyles();
    return(
        <HideOnScroll {...props}>
            <AppBar  className={classes.header}>
                <Toolbar variant="dense">
                    <Typography variant="h6" className={classes.title} >
                        Riko's handmade
                    </Typography>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
}