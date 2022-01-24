import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { EarringImg_Masonry } from './EarringImg_Masonry';
import { EarringImg_Quilted } from './EarringImg_Quilted';
import backgroundImg from '../component/Image/backgroundImg.jpg';
import EarringImage from '../component/Image/EarringImage.jpg';
import FlowerImage from '../component/Image/FlowerImage.jpg';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        head: {
            position: 'relative',
            margin: 0
        },
        background: {
            width: '100%',
            margin: 0
        },
        title: {
            textAlign: 'center',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)'
        },
        main_title: {
            fontFamily: 'cursive',
            color: '#F2EADF',
            fontSize: '3em',
            margin: 0
        },
        sub_title: {
            fontFamily: 'cursive',
            color: '#F2EADF',
            fontSize: '2em',
            margin:0
        },

        body: {
            width:'100vw'
        },
        base1: {
            backgroundColor: '#FCEEDB',
            height: '50vh',
            marginTop: '24px',
            marginLeft: '80px',
            display: 'flex'
        },
        base2: {
            backgroundColor: '#FFF5DD',
            height: '50vh',
            marginTop: '56px',
            marginRight: '80px',
            display: 'flex'
        },
        image: {
            margin: '32px',
            height: '50vh',
            objectFit: 'cover'
        },
        contents: {
            margin: 'auto',
            padding: '20px',
            textAlign: 'center',
            fontFamily: 'Noto Sans JP',
            color: '#666A71'
        }
    })
);

export const Home = () => {
    const classes = useStyles();
    return(
        <>
        <div className={classes.head}>
            <img className={classes.background} src={backgroundImg} />
            <div className={classes.title}>
                <h1 className={classes.main_title}>coilliction</h1>
                <p className={classes.sub_title}>~ My handmade collection ~</p>
            </div>
            {/* <div><Link to="/EarringImg_Masonry">EarringImg_Masonry</Link></div> */}
            {/* <div><Link to="/EarringImg_Quilted">EarringImg_Quilted</Link></div> */}
        </div>

        <div className={classes.body}>
            <div className={classes.base1}>
                <img className={classes.image} src={EarringImage} />
                <div className={classes.contents}>
                    <h1>Earrings</h1>
                    <p>小さなドライフラワーをUVレジンで包んだピイアスとイヤリング</p>
                </div>
            </div>
            <div className={classes.base2}>
                <div className={classes.contents}>
                    <h1>3D Flowers</h1>
                    <p>花びらをワイヤーで成形し、マニキュアとUVレジンで膜を張って作ったお花</p>
                </div>
                <img className={classes.image} src={FlowerImage} />
            </div>
        </div>
        </>
    )
}