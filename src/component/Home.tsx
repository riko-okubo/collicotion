import { Link } from 'react-router-dom';
import { EarringImg_Masonry } from './EarringImg_Masonry';
import { EarringImg_Quilted } from './EarringImg_Quilted';
import backgroundImg from '../component/Image/backgroundImg.jpg';
import EarringImage from '../component/Image/EarringImage.jpg';
import FlowerImage from '../component/Image/FlowerImage.jpg';
import { useStyles } from './HomeSyle';
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";

type Props = {
    children: React.ReactElement;
    window?: () => Window;
}

type PropsWindow = {
    window?: () => Window;
}

const SlideInScrollLeft = (props:Props) => {
    const {children, window} = props;
    const trigger = useScrollTrigger({target: window ? window() : undefined, disableHysteresis: true, threshold: 100});
    return (
      <Slide appear={false} direction="left" in={trigger} timeout={1000}>
        {children}
      </Slide>
    );
  }

const SlideInScrollRight = (props:Props) => {
    const {children, window} = props;
    const trigger = useScrollTrigger({target: window ? window() : undefined, disableHysteresis: true, threshold: 100});
    return (
        <Slide appear={true} direction="right" in={trigger} timeout={1000}>
            {children}
        </Slide>
    );
}

export const Home = (props:PropsWindow) => {
    const classes = useStyles();

    return(
        <div className={classes.home}>
        <div className={classes.head}>
            <img className={classes.background} src={backgroundImg} />
            <div className={classes.title}>
                <h1 className={classes.main_title}>coillicotion</h1>
                <p className={classes.sub_title}>~ My handmade collection ~</p>
            </div>
            {/* <div><Link to="/EarringImg_Masonry">EarringImg_Masonry</Link></div> */}
            {/* <div><Link to="/EarringImg_Quilted">EarringImg_Quilted</Link></div> */}
        </div>

        <div className={classes.body}>
        <SlideInScrollLeft {...props}>
            <div className={classes.base1}>
                <SlideInScrollRight {...props}>
                    <img className={classes.image} src={EarringImage} />
                </SlideInScrollRight>
                <div className={classes.contents}>
                    <h1>Earrings</h1>
                    <p>小さなドライフラワーをUVレジンで包んだピイアスとイヤリング</p>
                </div>
            </div>
        </SlideInScrollLeft>
        <SlideInScrollRight {...props}>
            <div className={classes.base2}>
                <div className={classes.contents}>
                    <h1>3D Flowers</h1>
                    <p>花びらをワイヤーで成形し、マニキュアとUVレジンで膜を張って作ったお花</p>
                </div>
                <SlideInScrollLeft {...props}>
                    <img className={classes.image} src={FlowerImage} />
                </SlideInScrollLeft>
            </div>
        </SlideInScrollRight>
        </div>
        </div>
    )
}