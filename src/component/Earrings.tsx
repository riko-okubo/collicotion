import React, { useEffect } from "react";
import { useStyles } from '../component/DisplayStyle';
import Box from '@mui/material/Box';
import { Layout } from "../molecules/Layout";
import { EarringsData } from "./Item/EarringsData";
import { WorkList } from "./WorkList";
import { BackButton } from "../molecules/BackButton";

export const Earrings = () => {
    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <Layout>
            <Box className={classes.box}>
                <h1>Earrings</h1>
                <WorkList data={EarringsData} />
                <BackButton />
            </Box>
        </Layout>
    );
}