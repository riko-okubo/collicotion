import React from "react";
import { useState } from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { IconButton } from '@mui/material';
import { useStyles } from './FlowersStyle';
import { itemData_Masonry } from './ItemData_Masonry';

export const Flowers = () => {
    const classes = useStyles();

    return(
        <Box className={classes.box}>
            <h1>3D Flowers</h1>
            <Grid container className={classes.container}>
                {itemData_Masonry.map((item) => (
                    <Grid item className={classes.item} key={item.img}>
                        <img src={item.img} />
                        <IconButton 
                            style={{position: "absolute",
                                    bottom:58,
                                    right:10,
                                    color: "rgba(189, 189, 189, 0.80)"}} >
                                <FullscreenIcon />
                        </IconButton>
                        <p>{item.title} </p>
                    </Grid>
                ))}
            </Grid>

        </Box>
    );
}