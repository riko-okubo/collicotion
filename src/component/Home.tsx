import React, {useEffect} from 'react';
import { useStyles } from './HomeStyle';
import { Button } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';

import { Layout } from '../molecules/Layout';
import backgroundImg from '../component/Image/backgroundImg.jpg';
import EarringsTop from '../component/Image/EarringsTop.jpg';
import FlowersTop from '../component/Image/FlowersTop.jpg';

import { useSpring, animated } from 'react-spring';


export const Home = () => {
    const [fadein, setFadein] = useSpring(() => ({ opacity: 0 }));
    const [curtain, setCurtain] = useSpring(() => ({ from: {y: -100, opacity:0},}))
    const [l_slidein, setL_Slidein] = useSpring(() => ({ from: {x: -100, opacity:0},}));
    const [r_slidein, setR_Slidein] = useSpring(() => ({ from: {x: 100, opacity:0},}));

    const classes = useStyles();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        setFadein({ opacity: 1, config: {friction: 200 } });
        setCurtain({ y: 0, opacity: 0.5, config: {friction: 100 }, });
        setL_Slidein({ x: 0, opacity: 1, config: {friction: 100 }, delay: 800 });
        setR_Slidein({ x: 0, opacity: 1, config: {friction: 100 }, delay: 1200 });

    }, []);

    return (
        <Layout>            
        <div className={classes.top} >   
            <animated.div style={fadein}>
                <img className={classes.top_background} src={backgroundImg} />
            </animated.div>
                <animated.div className={classes.curtain} style={curtain}>
                    <div className={classes.title}>
                        <h1>coillicotion</h1>
                        <p>~ riko's handmade collection ~</p>
                    </div>
                </animated.div>
        </div>    

        <div className={classes.body}>
            <animated.div style={l_slidein}>
                <Button  onClick={() => navigate('/Earrings')} >
                    <div className={classes.content}>
                        <img src={EarringsTop} />
                        <div className={classes.sub_title}>
                            <h3>Earrings</h3>
                            <p>小さなドライフラワーをUVレジンで包んだピイアスとイヤリング</p>
                        </div>
                    </div>
                </Button>
            </animated.div>
            <animated.div style={r_slidein}>
                <Button onClick={() => navigate('/Flowers')}>
                    <div className={classes.content}>
                        <img src={FlowersTop} />
                        <div className={classes.sub_title}>
                            <h3>Flowers</h3>
                            <p>ワイヤーで成形し、マニキュアとUVレジンで膜を張った花びらで作ったお花</p>
                        </div>
                    </div>
                </Button>
            </animated.div>
        </div>
        </Layout>
    )
}