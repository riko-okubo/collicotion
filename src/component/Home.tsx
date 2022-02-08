import React from 'react';
import { useStyles } from './HomeStyle';

import backgroundImg from '../component/Image/backgroundImg.jpg';
import EarringsGroup from '../component/Image/EarringsGroup.jpg';
import FlowersGroup from '../component/Image/FlowersGroup.jpg';

export const Home = () => {
    const classes = useStyles();

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
                    <img src={EarringsGroup} />
                    <div className={classes.sub_title}>
                        <h3>Earrings</h3>
                        <p>小さなドライフラワーをUVレジンで包んだピイアスとイヤリング</p>
                    </div>
                </div>
                <div className={classes.content}>
                    <img src={FlowersGroup} />
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