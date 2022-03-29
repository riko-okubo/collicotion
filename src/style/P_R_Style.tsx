import { createStyles, makeStyles,Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        div: {
            fontFamily: 'Klee One',
            "& h1":{
                textAlign: 'center',
                margin: '2em auto 1em auto',
                color: '#666a71',
            },
            "& p": {
                textAlign: 'center',
                width: '60vw',
                margin: '0.5em auto 0.5em auto',
                [theme.breakpoints.down('sm')]: { 
                    width: '380px',
                    margin: '10px auto 10px auto',
                },
            },
            "& ol": {
                padding: '1em',
              },
              "& li": {
                color: '#666a71',
                borderLeft: 'solid 6px #F9C87F',
                boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.2)',
                background: '#f4f4f4',
                margin: '1em auto 0 auto ',
                lineHeight: '1.5',
                padding: '0.5em',
                listStyleType: 'none!important',
                fontWeight: 'bold',
                width: '20em',
                [theme.breakpoints.down('sm')]: { 
                    width: '15em',
                },
                "&:hover": {
                    filter: 'opacity(60%)',
                    transform: 'scale(1.1)',
                    transition: '0.3s'
                },
                "&:active": {
                    filter: 'opacity(60%)'
                },
              }
        }
    })
)