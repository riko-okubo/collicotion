import React, {useEffect} from 'react';
import { useState } from 'react';
import { useStyles } from './HomeStyle';
import { Button } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';
import { Theme } from '@mui/material';

import { Layout } from '../molecules/Layout';
import backgroundImg from '../component/Image/backgroundImg.jpg';
import EarringsGroup from '../component/Image/EarringsGroup.jpg';
import EarringsTop from '../component/Image/EarringsTop.jpg';
import FlowersGroup from '../component/Image/FlowersGroup.jpg';
import FlowersTop from '../component/Image/FlowersTop.jpg';
import { Flowers } from './Flowers';

export const PageContext = React.createContext({});

export const Home = () => {
    const classes = useStyles();

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>            
        <div className={classes.top} >
                <img className={classes.top_background} src={backgroundImg} />
                <div className={classes.curtain}>
                    <div className={classes.title}>
                        <h1>coillicotion</h1>
                        <p>~ riko's handmade collection ~</p>
                    </div>
                </div>
        </div>    

            <div className={classes.body}>
                    <Button  onClick={() => navigate('/Earrings')} >
                        <div className={classes.content}>
                            <img src={EarringsTop} />
                            <div className={classes.sub_title}>
                                <h3>Earrings</h3>
                                <p>小さなドライフラワーをUVレジンで包んだピイアスとイヤリング</p>
                            </div>
                        </div>
                    </Button>                
                    <Button onClick={() => navigate('/Flowers')}>
                        <div className={classes.content}>
                            <img src={FlowersTop} />
                            <div className={classes.sub_title}>
                                <h3>3D Flowers</h3>
                                <p>ワイヤーで成形し、マニキュアとUVレジンで膜を張った花びらで作ったお花</p>
                            </div>
                        </div>
                    </Button>
                
            </div>
        
        </Layout>
    )
}