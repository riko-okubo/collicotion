import { createStyles, makeStyles,Theme } from "@material-ui/core/styles";
import { theme } from "./style/theme";

export const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        top: {
            position: 'relative',
            margin: 0,
            overflowX: 'hidden'
        },
        top_background: {            
            opacity: '70%',
            objectFit: 'cover',
            width: '100%',
            [theme.breakpoints.down("md")]: {
                width: '130%',
            }
        },
        curtain: {
            position: 'absolute',
            width: '35vw',
            height: '100%',
            backgroundColor: '#FFFFFF',
            opacity: '50%',
            top: 0,
            left: '15%'
        },
        title: {
            fontFamily: 'cursive',
            color: '#666A71',
            width:'100%',
            textAlign: 'center',
            position: 'absolute',
            top: '50%',
            justifyContent: 'center',
                "& h1": {
                    fontSize: '3em',
                    margin: 0,            },
                "& p": {
                    fontSize: '1.8em',
                    margin: 0
                },
            [theme.breakpoints.down('xs')]: {
                "& h1": {
                    fontSize: '1.2em',
                    margin: 0,            },
                "& p": {
                    fontSize: '0.5em',
                    margin: 0
                },
            }
        },

        body: {
            fontFamily: 'cursive',
            color: '#666A71',
            margin: '6em auto',
            overflowX: 'hidden',
            [theme.breakpoints.down('sm')]: {
                margin: '0.5em auto'
            }
        },
        content: {
            [theme.breakpoints.up('sm')]: {
                width: '100%',
                margin: '5em 0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                "& img": {
                    margin: '0 3em',
                    width: '25em',
                    height: 'auto',
                    borderRadius: '50%',
                    "&:hover": {
                        filter: 'opacity(60%)'
                    },
                    "&:active": {
                        filter: 'opacity(60%)'
                    }
                },
            },
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                margin: '2em 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                "& img": {
                    margin: '0 1em',
                    width: '12em',
                    height: 'auto',
                    borderRadius: '50%',
                    "&:hover": {
                        filter: 'opacity(60%)'
                    },
                    "&:active": {
                        filter: 'opacity(60%)'
                    }
                },
            }
        },
        sub_title: {
            fontFamily: 'cursive',
            textAlign: 'center',
            width: '30em',
            "& h3": {
                fontSize: '3em',
                color: '#666A71'
            },
            "& p": {
                fontSize: '1em',
                color: '#BDBDBD',
            },
            [theme.breakpoints.down('sm')]: {
                "& h3": {
                    fontSize: '1em',
                    color: '#666A71'
                },
                "& p": {
                    fontSize: '0.5em',
                    color: '#BDBDBD',
                }
            }
        }
    })
)