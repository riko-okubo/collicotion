import { createStyles, makeStyles,Theme } from "@material-ui/core/styles";
import miniFlowers_wide from "../component/atoms/RecordImg/miniFlowers_wide.jpg";
import miniFlowers from "../component/atoms/RecordImg/miniFlowers.jpg";

export const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        all: {
            backgroundImage: `url(${miniFlowers_wide})`,
            [theme.breakpoints.down('sm')]: { 
                backgroundImage: `url(${miniFlowers})`
            },
        },
        body:{
            width: '60vw',
            margin: '0 auto 0 auto',
            padding: '5%',
            overflowX: 'hidden',
            backgroundColor: '#FFFFFF',
            [theme.breakpoints.down('sm')]: { 
                width: '70vw',
            },
            "& p": {
                [theme.breakpoints.down('sm')]: { 
                    fontSize: '0.7em',
                },
            },
            "& header": {
                textAlign: 'center',
                marginTop: '3em',
                [theme.breakpoints.down('sm')]: { 
                    fontSize: '0.7em',
                    padding: 0,
                    marginTop: '5em',
                },
            },

            "& div": {
                paddingTop: '3em',
                [theme.breakpoints.down('sm')]: { 
                    paddingTop:'1em',
                },
                "& h2": {
                    [theme.breakpoints.down('sm')]: { 
                        fontSize: '1em'
                    }
                },
                "& h3": {
                    [theme.breakpoints.down('sm')]: { 
                        fontSize: '1em'
                    }
                },
                "& h4": {
                    [theme.breakpoints.down('sm')]: { 
                        fontSize: '1em'
                    }
                },
                "& ul": {
                    "& li": {
                        margin: '0.8em',
                        [theme.breakpoints.down('sm')]: { 
                            fontSize: '0.9em',
                        }
                    },
                    "& p": {
                        [theme.breakpoints.down('sm')]: { 
                            fontSize: '0.9em',
                        }
                    },
                },
            },
            "& img": {
                width: '100%',
                padding: '2% 0 2% 0'
            },
            "& video": {
                width: '100%',
                padding: '2% 0 3% 0',
            }
        }
    })
)