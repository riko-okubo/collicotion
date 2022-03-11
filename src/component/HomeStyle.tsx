import { createStyles, makeStyles,Theme } from "@material-ui/core/styles";

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
            fontFamily: 'M PLUS Rounded 1c',
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
            "& button": {
                    width: '100%',
                    margin: '5em 0',
             },
            [theme.breakpoints.down('sm')]: {
                margin: '1em auto',
                "& button": {
                    width: '80%',
                    display: "block",
                    margin: '1em auto 1.5em auto'
                }
            },
        },
        content: { 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                "&:hover": {
                    filter: 'opacity(60%)',
                    transform: 'scale(1.1)',
                    transition: '0.3s'
                },
                "&:active": {
                    filter: 'opacity(60%)'
                },
                "& img": {
                    margin: '0 3em',
                    width: '25em',
                    height: 'auto',
                    borderRadius: '50%',
                    transition: '0.3s',
                },
            [theme.breakpoints.down('sm')]: { 
                display: "flex", 
                flexDirection: 'column',
                "& img": {
                    margin: '0 1em',
                    width: '12em',
                    height: 'auto',
                    borderRadius: '50%'
                },
            }
        },
        sub_title: {
            fontFamily: 'cursive',
            textAlign: 'center',
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