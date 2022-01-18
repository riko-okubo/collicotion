import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import hook_Blue from './Image/hook_Blue.jpg';
import hook_BlueSkyblueWhite from './Image/hook_BlueSkyblueWhite.jpg';
import hook_BlueWhite from './Image/hook_BlueWhite.jpg';
import hook_GreenWhite from './Image/hook_GreenWhite.jpg';
import hook_OrangeYellowWhite from './Image/hook_OrangeYellowWhite.jpg';
import hook_PinkRed from './Image/hook_PinkRed.jpg';
import hook_Red from './Image/hook_Red.jpg';
import hook_RedOrangeYellow from './Image/hook_RedOrangeYellow.jpg';
import hook_VioletRedPink from './Image/hook_VioletRedPink.jpg';
import stud_Blue from './Image/stud_Blue.jpg';
import stud_BlueWhite from './Image/stud_BlueWhite.jpg';
import stud_Green from './Image/stud_Green.jpg';
import stud_Orange from './Image/stud_Orange.jpg';
import stud_OrangeGreenYellow from './Image/stud_OrangeGreenYellow.jpg';
import stud_RedWhite from './Image/stud_RedWhite.jpg';
import stud_VioletPinkWhite from './Image/stud_VioletPinkWhite.jpg';

export const  EarringImg = () => {

    return (
        <Box sx={{ width: '80%', height: 1, overflowY: 'scroll',  margin: 'auto'}}>
            <ImageList variant="masonry" cols={3} gap={8}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                          sx={{
                            background:
                              'linear-gradient(to top, rgba(225,225,225,0.7) 0%, ' +
                              'rgba(225,225,225,0.4) 70%, rgba(225,225,225,0) 100%)',
                          }}
                          title={item.title}
                          position="bottom"
                          />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}

const itemData = [
    {
      img: hook_Blue,
      title: 'hook_blue',
    },
    {
      img: hook_BlueSkyblueWhite,
      title: 'hook_blue-skyblue-white',
    },
    {
      img: hook_BlueWhite,
      title: 'hook_blue-white',
    },
    {
      img: hook_GreenWhite,
      title: 'hook_green-white',
    },
    {
      img: hook_OrangeYellowWhite,
      title: 'hook_orange-yellow-white',
    },
    {
      img: hook_PinkRed,
      title: 'hook_PinkRed',
    },
    {
      img: hook_Red,
      title: 'hook_Red',
    },
    {
      img: hook_RedOrangeYellow,
      title: 'hook_RedOrangeYellow',
    },
    {
      img: hook_VioletRedPink,
      title: 'hook_VioletRedPink',
    },
    {
      img: stud_Blue,
      title: 'stud_Blue',
    },
    {
      img: stud_BlueWhite,
      title: 'stud_BlueWhite',
    },
    {
      img: stud_Green,
      title: 'stud_Green',
    },
    {
      img: stud_Orange,
      title: 'stud_Orange',
    },
    {
      img: stud_OrangeGreenYellow,
      title: 'stud_OrangeGreenYellow',
    },
    {
      img: stud_RedWhite,
      title: 'stud_RedWhite',
    },
    {
      img: stud_VioletPinkWhite,
      title: 'stud_VioletPinkWhite',
    },
  ];
  