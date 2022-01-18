import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { itemData_Masonry } from './ItemData_Masonry';

export const  EarringImg_Masonry = () => {
    return (
        <Box sx={{ width: '80%', height: 1, overflowY: 'scroll',  margin: 'auto'}}>
            <ImageList variant="masonry" cols={3} gap={8}>
                {itemData_Masonry.map((item) => (
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
