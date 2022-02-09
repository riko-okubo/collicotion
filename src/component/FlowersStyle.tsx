import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        box: {
            width: '80vw',
            marginLeft: 'auto',
            marginRight: 'auto',
            "& h1": {
                textAlign: 'center',
                color: '#666A71',
                fontSize: '3em',
                fontFamily: 'cursive',
                padding: '0.5em'
            }
        },
        container:{
            gap: '4em',
            justifyContent: 'center',
            padding: '5% 0',
        },
        item:{
            position: 'relative',
            textAlign: 'center',
            "& img": {
                width: '10em',
                height: '12em',
                objectFit: 'cover',
                border: '0.2em solid rgba(69, 71, 81, 0.16)',
                padding: '0.4em',
                backgroundColor: '#FFFFFF'
            },
            "& p": {
                fontFamily: 'cursive',
                fontSize: '0.8em',
                color: '#BDBDBD'
            }
        },        
    })
)