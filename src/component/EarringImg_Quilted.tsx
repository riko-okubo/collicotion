import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { itemData_Quilted } from './ItemData_Quilted';

const srcset = (image:string, size:any, rows = 1, cols = 1) => {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

export const  EarringImg_Quilted = () => {
    return (
        <Box sx={{ width: '60%', height: 1, overflowY: 'scroll',  margin: 'auto'}}>
        <ImageList
            variant="quilted"
            cols={4}
        >
        {itemData_Quilted.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              {...srcset(item.img, 300, item.rows, item.cols)}
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