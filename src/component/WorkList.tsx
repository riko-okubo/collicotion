import React, { useContext } from "react";
import { useState } from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { IconButton } from '@mui/material';
import { useStyles } from './FlowersStyle';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

type Props = {
    data:{
        img: string,
        title: string,
        modal: string
    }[]
}

export const WorkList = (props:Props) => {
    const data = props.data;

    const classes = useStyles();

    const [open, setOpen] = useState(-1);
    const onOpenDialog = (i: number) => {
        console.log(i);
        setOpen(i);
    }
    const onCloseDialog = () => {
        setOpen(-1);
    }
    return (
        <>
            <Grid container className={classes.container}>
                {data.map((item, index) => (
                    <Grid item className={classes.item} key={index}>
                        <img src={item.img} />
                        <IconButton 
                            onClick={() => onOpenDialog(index)}
                            style={{position: "absolute",
                                    bottom:58,
                                    right:10,
                                    color: "rgba(189, 189, 189, 0.80)"}} >
                                <FullscreenIcon />
                        </IconButton>
                        <Modal
                            open={index === open}
                            onClose={onCloseDialog}
                            closeAfterTransition
                            BackdropProps={{
                                timeout: 600,
                            }}
                        >
                            <Fade in={index === open}>
                                <div className={classes.modal}>
                                    <img src={item.modal} />
                                </div>
                            </Fade>
                        </Modal>
                        <p>{item.title} </p>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}