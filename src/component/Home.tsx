import { Link } from 'react-router-dom';
import { EarringImg_Masonry } from './EarringImg_Masonry';
import { EarringImg_Quilted } from './EarringImg_Quilted';

export const Home = () => {
    return(
        <>
        <div><Link to="/EarringImg_Masonry">EarringImg_Masonry</Link></div>
        <div><Link to="/EarringImg_Quilted">EarringImg_Quilted</Link></div>
        </>
    )
}