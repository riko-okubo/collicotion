import React, { useEffect } from "react";
import { useStyles } from '../style/DisplayStyle';
import Box from '@mui/material/Box';
import { Layout } from "../component/organisms/Layout";
import { EarringsData } from "../component/atoms/data/EarringsData";
import { WorkList } from "../component/organisms/WorkList";
import { BackButton } from "../component/atoms/BackButton";

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