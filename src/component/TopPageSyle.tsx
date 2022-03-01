import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        head: {
            position: 'relative',
            margin: 0
        },
        background: {
            width: '100%',
            margin: 0,
            opacity: '60%'
        },
        title: {
            textAlign: 'center',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)'
        },
        main_title: {
            fontFamily: 'cursive',
            color: '#F2EADF',
            fontSize: '3em',
            margin: 0
        },
        sub_title: {
            fontFamily: 'cursive',
            color: '#F2EADF',
            fontSize: '2em',
            margin:0
        },

        body: {
            width:'100vw'
        },
        contents: {
            display: 'flex',
            justifyItems: 'center',
            justifyContent: 'center'
        },
        base: {
            width: '100vw',
            height: '80vh',
            scaleMode: 'fill',
            margin: 0,
            opacity: '20%'
        },
        image: {
            display: 'inline-block',
            width: '40vw',
            margin: '2%'
        },
        content: {
            display: 'inline-block',
            verticalAlign: 'top',
            width: '40vw',
            margin: '8% 2%',
            textAlign: 'center',
            fontFamily: 'Noto Sans JP',
            color: '#666A71'
        }
    })
);