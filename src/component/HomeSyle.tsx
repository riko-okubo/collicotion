import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        home: {
            overflow: 'hidden',
            whiteSpace: 'normal'
        },
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
        base1: {
            backgroundColor: '#F8F2DE',
            height: '50vh',
            marginTop: '24px',
            marginLeft: '80px',
            display: 'flex'
        },
        base2: {
            backgroundColor: '#F8F2DE',
            height: '50vh',
            marginTop: '56px',
            marginRight: '80px',
            display: 'flex'
        },
        image: {
            margin: '32px',
            height: '50vh',
            objectFit: 'cover'
        },
        contents: {
            margin: 'auto',
            padding: '20px',
            textAlign: 'center',
            fontFamily: 'Noto Sans JP',
            color: '#666A71'
        }
    })
);