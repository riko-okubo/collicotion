import { useState } from 'react';
import backgroundImg from '../component/Image/backgroundImg.jpg';
import EarringImage from '../component/Image/EarringImage.jpg';
import EarringsBackground from '../component/Image/EarringsBackground.jpg';
import FlowerImage from '../component/Image/FlowerImage.jpg';
import FlowerBackground from '../component/Image/FlowerBackground.jpg';
import { useStyles } from './TopPageSyle';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export const TopPage = () => {
    const classes = useStyles();

    return(
        <>
        <Parallax pages={3} style={{ top: '0', left: '0' }}>
        <div className={classes.head}>
            <img className={classes.background} src={backgroundImg} />
            <div className={classes.title}>
                <h1 className={classes.main_title}>coillicotion</h1>
                <p className={classes.sub_title}>~ My handmade collection ~</p>
            </div>
        </div>

        <div className={classes.body}>
            <ParallaxLayer offset={1} speed={0.3}>   
                <img src={EarringsBackground} className={classes.base}/>  
            </ParallaxLayer>    

            <ParallaxLayer offset={1} speed={0.5}>
                <div className={classes.contents}>
                    <img src={EarringImage} className={classes.image} />
                    <div className={classes.content}> 
                        <h1>Earrings</h1>
                        <p>小さなドライフラワーをUVレジンで包んだピイアスとイヤリング</p>
                    </div>
                </div>
            </ParallaxLayer>

            <ParallaxLayer offset={2} speed={0.5}>   
                <img src={FlowerBackground} className={classes.base}/>  
            </ParallaxLayer>    
            
            <ParallaxLayer offset={2} speed={0.3}>
                <div className={classes.contents}>
                <img className={classes.image} src={FlowerImage} />
                    <div className={classes.content}> 
                    <h1>3D Flowers</h1>
                    <p>花びらをワイヤーで成形し、マニキュアとUVレジンの膜で作ったお花</p>
                    </div>
                </div>
            </ParallaxLayer>
        </div>
        </Parallax>
        </>
    )
}