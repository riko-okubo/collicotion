import React, { useEffect } from "react";
import { useStyles } from '../style/DisplayStyle';
import Box from '@mui/material/Box';
import { Layout } from "../component/organisms/Layout";
import { FlowerData } from "../component/atoms/data/FlowerData";
import { WorkList } from "../component/organisms/WorkList";
import { BackButton } from "../component/atoms/BackButton";

export const Flowers = () => {
    const classes = useStyles();

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