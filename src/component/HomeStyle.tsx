import { createStyles, makeStyles,Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        top: {
            position: 'relative',
            margin: 0,
            overflowX: 'hidden'
        },
        top_background: {
            height: '80vh',
            width: '100%',
            opacity: '70%',
            objectFit: 'cover'
        },
        curtain: {
            position: 'absolute',
            width: '35vw',
            height: '80vh',
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
            }
        },

        body: {
            fontFamily: 'cursive',
            color: '#666A71',
            margin: '6em auto'
        },
        content: {
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
            }
        },

        footer: {
            backgroundColor: '#F2EADF',
            display: 'inline-block',
            width: '100%',
            bottom: 0,
            "& ul": {
                margin: '2.5em 1.5em',
                textAlign: 'end',
                listStyleType: 'none'
            },
            "& li":{
                margin: '1em',
                fontFamily: 'cuesive',
                color: '#666A71',
                fontSize: '1em'
            }
        }
    })
)