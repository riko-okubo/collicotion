import { createStyles, makeStyles,Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        top: {
            height: '80%',
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
            fontFamily: 'Sweetgrend',
            color: '#666A71',
            width:'100%',
            textAlign: 'center',
            position: 'absolute',
            top: '50%',
            justifyContent: 'center',
                "& h1": {
                    fontSize: '6em',
                    margin: 0,            },
                "& p": {
                    fontSize: '3.5em',
                    margin: 0
                },
            [theme.breakpoints.down('xs')]: {
                "& h1": {
                    fontSize: '2.2em',
                    margin: 0,            },
                "& p": {
                    fontSize: '1.1em',
                    margin: 0
                },
            }
        },

        body: {
            // fontFamily: 'Sweetgrend',
            
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
            textTransform: 'none',
            textAlign: 'center',
            width: '30em',
            "& h3": {
                margin: 0,
                fontFamily: 'Sweetgrend',
                fontSize: '7em',
                color: '#666A71'
            },
            "& p": {
                margin: 0,
                fontFamily: '',
                fontSize: '1em',
                color: '#BDBDBD',
            },
            [theme.breakpoints.down('sm')]: {
                textAlign: 'center',
                width: '15em',
                "& h3": {
                    
                    fontFamily: 'Sweetgrend',
                    fontSize: '3em',
                    color: '#666A71'
                },
                "& p": {
                    margin: 0,
                    fontFamily: '',
                    fontSize: '0.5em',
                    color: '#BDBDBD',
                }
            }
        }
    })
)