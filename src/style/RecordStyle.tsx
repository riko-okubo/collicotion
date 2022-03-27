import { createStyles, makeStyles,Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        all: {
            backgroundColor: '#F2EADF'
        },
        body:{
            width: '60vw',
            margin: '0 auto 0 auto',
            padding: '5%',
            overflowX: 'hidden',
            backgroundColor: '#FFFFFF',
            "& header": {
                textAlign: 'center',
            },
            "& div": {
                paddingTop: '5%'
            },
            "& img": {
                width: '100%',
                padding: '2% 0 2% 0'
            },
            "& video": {
                width: '100%',
                padding: '2% 0 3% 0'
            }
        }
    })
)