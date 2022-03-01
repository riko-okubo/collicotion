import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        head: {
            position: 'relative'
            // margin: 0
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
            width:'100vw',
            marginTop: '10%'
        },
        contents: {         //画面幅縮小時に縦並び（mobile用作成時でもよい）
            display: 'flex',
            justifyItems: 'center',
            justifyContent: 'center',
            paddingTop: '8%'
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
            width: '40%',
            height: 'auto',
            objectFit: 'cover',
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
        },
        border :{
            borderTop: '1px dashed #8c8b8b',
	        borderBottom: '1px dashed #ffffff'
        }
    })
);