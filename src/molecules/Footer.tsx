import React from "react";
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
                fontFamily: 'cuesive',
                color: '#666A71',
                fontSize: '1em'
            }
        }
    })
)

export const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <ul>
                <li>アクセサリーについて</li>
                <li>ホームページ製作記録</li>
                <li>プロフィール</li>
            </ul>
        </div>
    )
}