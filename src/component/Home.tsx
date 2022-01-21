import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { EarringImg_Masonry } from './EarringImg_Masonry';
import { EarringImg_Quilted } from './EarringImg_Quilted';
import backgroundImg from '../component/Image/backgroundImg.jpg';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        background: {
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            height:'100vh'
        },
        title: {
            margin: 'auto'
        }
    })
);

export const Home = () => {
    const classes = useStyles();
    return(
        <div className={classes.background}>
            <h1 className={classes.title}>coilliction</h1>
            {/* <div><Link to="/EarringImg_Masonry">EarringImg_Masonry</Link></div> */}
            {/* <div><Link to="/EarringImg_Quilted">EarringImg_Quilted</Link></div> */}
        </div>
    )
}