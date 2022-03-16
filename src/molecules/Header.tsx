import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

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
    const location = useLocation();
    const navigate = useNavigate();
    
    const useStyles = makeStyles((theme: Theme) => {
            return createStyles({
                header: {
                    backgroundColor: `${ location.pathname === `/` ? `rgba(255, 255, 255, 0)` : `#FFFFFF`}`,
                    boxShadow: `${ location.pathname === `/` ? `0` : `0px 5px 8px rgba(215, 201, 183, 0.4)`}`
                },
                title: {
                    color: `${ location.pathname === `/` ? `#FFFFFF` : `#828282`}`,
                    textAlign:"center",
                    marginTop: '0.2em',
                    fontFamily:"Sweetgrend",
                    fontSize: '1.8em',
                    cursor: 'pointer',
                    [theme.breakpoints.down('sm')]: {
                        fontSize: '1em'
                    }
                }
            })
    });
    // console.log(location.pathname);
    useEffect(() => {

    }, [location.pathname])

    const classes = useStyles();

    return(
        <HideOnScroll {...props}>
            <AppBar  elevation={0} className={classes.header}>
                <Toolbar variant="dense">
                    <Typography variant="h6" className={classes.title} onClick={() => navigate('/')}>
                        Riko's handmade
                    </Typography>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
}