import React, { useEffect } from "react";
import { useStyles } from './FlowersStyle';
import Box from '@mui/material/Box';
import { Layout } from "../molecules/Layout";
import { FlowerData } from "./Item/FlowerData";
import { WorkList } from "./WorkList";
import { BackButton } from "../molecules/BackButton";

export const Flowers = () => {
    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <Layout>
            <Box className={classes.box}>
                <h1>Flowers</h1>
                <WorkList data={FlowerData} />
                <BackButton />
            </Box>
        </Layout>
    );
}