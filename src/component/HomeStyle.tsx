import { createStyles, makeStyles,Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        top: {
            position: 'relative',
            margin: 0,
            overflowX: 'hidden'
        },
        top_background: {
            height: '100vh',
            opacity: '60%',
            scaleMode: 'fill',
        },
        curtain: {
            position: 'absolute',
            width: '35vw',
            height: '100vh',
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
            left: '50%',
            transform: 'translate(-50%,-50%)'
        },
        main_title: {
            fontSize: '3em',
            margin: 0
        },
        sub_title: {
            fontSize: '1.8em',
            margin: 0
        },
    })
)