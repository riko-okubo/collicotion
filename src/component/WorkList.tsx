import React from 'react';
import './WorkList-style.css'

import red_rose from './img/red-rose.jpg';
import blue_rose from './img/blue-rose.jpg'
import yellow_rose from './img/yellow-rose.jpg'
import violet_rose from './img/violet-rose.jpg'
import black_rose from './img/black-rose.jpg'
import deeppink_rose from './img/deeppink-rose.jpg'

export const WorkList = () => {
    return (
        <>
        <h1>Flower Page</h1>
        <div className="ListBase">
            <div className="WorkImg">
                <img src={red_rose} alt="red-rose" />
            </div>
            <div className="WorkImg">
                <img src={blue_rose} alt="blue-rose" />
            </div>
            <div className="WorkImg">
                <img src={yellow_rose} alt="yellow-rose" />
            </div>
            <div className="WorkImg">
                <img src={violet_rose} alt="violet-rose" />
            </div>
            <div className="WorkImg">
                <img src={black_rose} alt="black-rose" />
            </div>
            <div className="WorkImg">
                <img src={deeppink_rose} alt="deeppink-rose" />
            </div>
        </div>
        </>
    )
}