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
                fontSize: '5em',
                fontFamily: 'Caveat, cursive, sans-serif',
                margin: '1.2em 0 0.2em 0',
                [theme.breakpoints.down("sm")]: {
                    fontSize: '3em',
                    margin: '1.4em 0 0.2em 0',
                }
            }
        },
        container:{
            gap: '4em',
            justifyContent: 'center',
            padding: '5% 0',
            [theme.breakpoints.down("sm")]: {
                gap: '3em',
                justifyContent: 'center',
            }
        },
        item:{
            position: 'relative',
            textAlign: 'center',
            "& img": {
                width: '10em',
                height: '12em',
                objectFit: 'cover',
                border: '0.2em solid rgba(69, 71, 81, 0.16)',
                padding: '0.3em',
                backgroundColor: '#FFFFFF'
            },
            "& p": {
                fontFamily: 'Caveat, cursive, sans-serif',
                fontSize: '1.5em',
                color: '#BDBDBD'
            },
            [theme.breakpoints.down("sm")]: {
                "& img": {
                    width: '6em',
                    height: '8em',
                    objectFit: 'cover',
                    border: '0.15em solid rgba(69, 71, 81, 0.16)',
                    padding: '0.15em',
                    marginBottom: '0.6em',
                    backgroundColor: '#FFFFFF'
                },
                "& p": {
                    margin: 0.2,
                    fontFamily: 'Caveat, cursive, sans-serif',
                    fontSize: '0.8em',
                    color: '#BDBDBD'
                },
            }
        },
        button: {
            position: "absolute",
            bottom:'0.8em',
            right:'1.5em',
            color: "rgba(189, 189, 189, 0.80)",
            [theme.breakpoints.down("sm")]: {
                bottom:'1em',
                right:'1em',
            }
        },
        modal: {
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            outline: 'none',
            display:'flex',
            flexDirection:'column',
            "& img": {
                width: '20em',
                border: 'solid 0.5em #FFFFFF',
                boxShadow: '3px 3px 5px 5px rgba(0, 0, 0, 0.3)',
                [theme.breakpoints.down("sm")]: {
                    width: '15em',
                    border: 'solid 0.3em #FFFFFF',
                }
            }
        }
    })
)