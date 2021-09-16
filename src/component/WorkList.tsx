// import React from 'react';

// import 
//     red-rose.jpg
    // blue-rose.jpg,
    // yellow-rose.jpg,
    // violet-rose.jpg,
    // black-rose.jpg,
    // deeppink-rose.jpg,
    // red-tulip.jpg,
    // blue-tulip.jpg,
    // yellow-tulip.jpg,
    // carnaition.jpg,
    // bottan.jpg
//  from './img'

const imglist = [
    {img: 'red-rose.jpg', alt: 'Rose(red)'},
    {img: 'blue-rose.jpg', alt: 'Rose(blue)'},
    {img: 'yellow-rose.jpg', alt: 'Rose(yellow)'},
    {img: 'violet-rose.jpg', alt: 'Rose(violet)'},
    {img: 'black-rose.jpg', alt: 'Rose(black)'},
    {img: 'deeppink-rose.jpg', alt: 'Rose(deep pink)'},
    {img: 'red-tulip.jpg', alt: 'Tulip(red)'},
    {img: 'blue-tulip.jpg', alt: 'Tulip(blue)'},
    {img: 'yellow-tulip.jpg', alt: 'Tulip(yellow)'},
    {img: 'carnaition.jpg', alt: 'Carnation'},
    {img: 'bottan.jpg', alt: 'Camellia'},
];


export const WorkList = imglist.map((work) => {
    return (
        <img src={work.img} />
    )
})