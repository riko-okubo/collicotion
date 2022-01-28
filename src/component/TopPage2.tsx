import { useStyles } from './TopPageStyle2';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import backgroundImg from '../component/Image/backgroundImg.jpg';
import EarringImage from '../component/Image/EarringImage.jpg';
import FlowerImage from '../component/Image/FlowerImage.jpg';
import MaskGroup1 from './Image/MaskGroup1.jpg';
import MaskGroup2 from './Image/MaskGroup2.jpg';
import MaskGroup3 from './Image/MaskGroup3.jpg';
import MaskGroup4 from './Image/MaskGroup4.jpg';
import MaskGroup5 from './Image/MaskGroup5.jpg';
import MaskGroup6 from './Image/MaskGroup6.jpg';
import MaskGroup7 from './Image/MaskGroup7.jpg';
import MaskGroup8 from './Image/MaskGroup8.jpg';
import MaskGroup9 from './Image/MaskGroup9.jpg';
import MaskGroup10 from './Image/MaskGroup10.jpg';
import MaskGroup11 from './Image/MaskGroup11.jpg';

export const TopPage2 = () => {
    const classes = useStyles();

    return(
        <>
        <Parallax pages={3} style={{ top: '0', left: '0' }}>

            <ParallaxLayer offset={0} speed={0}>            
                <div className={classes.head}>
                    <img className={classes.background} src={backgroundImg} />
                    <div className={classes.title}>
                        <h1 className={classes.main_title}>coillicotion</h1>
                        <p className={classes.sub_title}>~ My handmade collection ~</p>
                    </div>
                </div>
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0.1} style={{ opacity: 0.2 }}>
                <img src={MaskGroup1} style={{ display: 'block', width: '20%', marginLeft: '45%' }} />
                <img src={MaskGroup2} style={{ display: 'block', width: '15%', marginLeft: '30%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1.6} speed={0.3} style={{ opacity: 0.2 }}>
                <img src={MaskGroup4} style={{ display: 'block', width: '15%', marginLeft: '55%' }} />
                <img src={MaskGroup6} style={{ display: 'block', width: '20%', marginLeft: '80%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0.6} style={{ opacity: 0.4 }}>
                <img src={MaskGroup5} style={{ display: 'block', width: '15%', marginLeft: '10%' }} />
                <img src={MaskGroup3} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1.8} speed={0.2} style={{ opacity: 0.4 }}>
                <img src={MaskGroup7} style={{ display: 'block', width: '20%', marginLeft: '15%' }} />
                <img src={MaskGroup8} style={{ display: 'block', width: '25%', marginLeft: '40%' }} />
                <img src={MaskGroup9} style={{ display: 'block', width: '15%', marginLeft: '82%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={2.4} speed={0.1} style={{ opacity: 0.5 }}>
                <img src={MaskGroup10} style={{ display: 'block', width: '15%', marginLeft: '10%' }} />
                <img src={MaskGroup11} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
            </ParallaxLayer>

            <div className={classes.body}>

                <ParallaxLayer offset={1} speed={0.05}>
                    <div className={classes.contents}>
                        <img src={EarringImage} className={classes.image} />
                        <div className={classes.content}> 
                            <h1>Earrings</h1>
                            <p>小さなドライフラワーをUVレジンで包んだピイアスとイヤリング</p>
                        </div>
                    </div>
                </ParallaxLayer>
                
                <ParallaxLayer offset={2} speed={0.05}>
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