import React, { useEffect } from "react";
import { useStyles } from './FlowersStyle';
import Box from '@mui/material/Box';
import { FlowerData } from "./Item/FlowerData";
import { WorkList } from "./WorkList";

export const Flowers = () => {
    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <Box className={classes.box}>
            <h1>3D Flowers</h1>
            <WorkList data={FlowerData} />
        </Box>
    );
}