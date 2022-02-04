import React from 'react';
import { useStyles } from './HomeStyle';

import backgroundImg from '../component/Image/backgroundImg.jpg';

export const Home = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.top}>
                <img className={classes.top_background} src={backgroundImg} />
                <div className={classes.curtain}>
                    <div className={classes.title}>
                        <h1 className={classes.main_title}>coillicotion</h1>
                        <p className={classes.sub_title}>~ My handmade collection ~</p>
                    </div>
                </div>
            </div>
        </>
    )
}