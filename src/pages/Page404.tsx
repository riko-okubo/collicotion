import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Box } from "@mui/material";
import notfound from "../component/atoms/Image/notfound.jpg";
import { BackButton } from "../component/atoms/BackButton";

const useStyles = makeStyles((theme:Theme) =>
    createStyles({
        box: {
            textAlign: 'center',
            justifyContent: 'center',
            margin: '2em',
            "& img":{
                margin: '3em 0 1em 0',
                width: '25em',
            },
            "& p": {
                fontFamily: 'Kokoro',
                fontSize: '1em',
                color: '#666A71',
            },
            [theme.breakpoints.down('xs')]: {
                "& img": {
                    width: '12em'
                },
                "& p":{
                    fontSize: '0.5em'
                }
            }
        }
    })
)

export const Page404 = () => {

    const classes = useStyles();

    return(
        <>
            <Box className={classes.box}>
                <img src={notfound} />
                <p>ページが見つかりません。</p>
                <p>ページが存在しない、または作成中です。</p>
            </Box>
            <BackButton />
        </>
    )
}