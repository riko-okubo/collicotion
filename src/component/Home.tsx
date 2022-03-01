import React, {useEffect} from 'react';
import { useState } from 'react';
import { useStyles } from './HomeStyle';
import { Button } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';

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
        <>
            {/* <div className={classes.header}>
                <Header />
            </div> */}
            
        <div className={classes.top}>
                <img className={classes.top_background} src={backgroundImg} />
                <div className={classes.curtain}>
                    <div className={classes.title}>
                        <h1>coillicotion</h1>
                        <p>~ riko's handmade collection ~</p>
                    </div>
                </div>
            

            <div className={classes.body}>
                <div className={classes.content}>
                    <Button onClick={() => navigate('/Earrings')}>
                        <img src={EarringsTop} />
                    </Button>
                    <div className={classes.sub_title}>
                        <h3>Earrings</h3>
                        <p>小さなドライフラワーをUVレジンで包んだピイアスとイヤリング</p>
                    </div>
                </div>
                <div className={classes.content}>
                    <Button onClick={() => navigate('/Flowers')}>
                        <img src={FlowersTop} />
                    </Button>
                    <div className={classes.sub_title}>
                        <h3>3D Flowers</h3>
                        <p>ワイヤーで成形し、マニキュアとUVレジンで膜を張った花びらで作ったお花</p>
                    </div>
                </div>
            </div>

            <div className={classes.footer}>
                <ul>
                    <li>アクセサリーについて</li>
                    <li>ホームページ製作記録</li>
                    <li>プロフィール</li>
                </ul>
            </div>
        </div>
        </>
    )
}