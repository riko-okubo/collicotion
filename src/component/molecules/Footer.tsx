import React from "react";
import { useNavigate } from "react-router-dom";
import { createStyles, makeStyles,Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        footer: {
            backgroundColor: '#F2EADF',
            display: 'inline-block',
            width: '100%',
            bottom: 0,
            "& ul": {
                margin: '2.5em 1.5em',
                textAlign: 'end',
                listStyleType: 'none'
            },
            "& li":{
                margin: '1em',
                fontFamily: 'Kokoro, cuesive',
                color: '#666A71',
                fontSize: '1em',
                cursor: 'pointer'
            },
            [theme.breakpoints.down('xs')]: {
                "& ul": {
                    margin: '1.5em 0.8em',
                    textAlign: 'end',
                    listStyleType: 'none'
                },
                "& li":{
                    margin: '1em',
                    fontFamily: 'Kokoro, cuesive',
                    color: '#666A71',
                    fontSize: '0.6em',
                    cursor: 'pointer'
                }
            }
        }
    })
)

export const Footer = () => {
    const navigate = useNavigate();
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <ul>
                <li onClick={() => navigate('/AboutAccessories')}>アクセサリーについて</li>
                <li onClick={() => navigate('/ProductionRecord')}>ホームページ製作記録</li>
                {/* <li>プロフィール</li> */}
            </ul>
        </div>
    )
}