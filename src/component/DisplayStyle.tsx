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
                    margin: '1.4em 0 0.3em 0',
                }
            }
        },
        container:{
            gap: '4em',
            justifyContent: 'center',
            padding: '5% 0',
            [theme.breakpoints.down("sm")]: {
                gap: '2em',
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
                padding: '0.3em',
                backgroundColor: '#FFFFFF',
                boxShadow: '0 0 10px rgba(69, 71, 81, 0.4)'
            },
            "& p": {
                fontFamily: 'Caveat, cursive, sans-serif',
                fontSize: '1.5em',
                color: '#BDBDBD'
            },
            "&:hover": {
                filter: 'opacity(60%)',
                transform: 'scale(1.1)',
                transition: '0.3s'
            },
            "&:active": {
                filter: 'opacity(60%)'
            },
            [theme.breakpoints.down("sm")]: {
                "& img": {
                    width: '7em',
                    height: '8em',
                    objectFit: 'cover',
                    padding: '0.18em',
                    marginBottom: '0.6em',
                    backgroundColor: '#FFFFFF',
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
            bottom:'4em',
            right:'0.8em',
            color: "rgba(189, 189, 189, 0.80)",
            [theme.breakpoints.down("sm")]: {
                bottom:'1.5em',
                right:'0.5em',
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