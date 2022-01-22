import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { EarringImg_Masonry } from './EarringImg_Masonry';
import { EarringImg_Quilted } from './EarringImg_Quilted';
import backgroundImg from '../component/Image/backgroundImg.jpg';
import { green } from '@material-ui/core/colors';

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
        }
    })
);

export const Home = () => {
    const classes = useStyles();
    return(
        <div className={classes.head}>
            <img className={classes.background} src={backgroundImg} />
            <div className={classes.title}>
                <h1 className={classes.main_title}>coilliction</h1>
                <p className={classes.sub_title}>~ My handmade collection ~</p>
            </div>
            {/* <div><Link to="/EarringImg_Masonry">EarringImg_Masonry</Link></div> */}
            {/* <div><Link to="/EarringImg_Quilted">EarringImg_Quilted</Link></div> */}
        </div>
    )
}