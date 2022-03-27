import React, { useEffect } from "react";
import { useState } from "react";
import Grid from '@mui/material/Grid';
import { useStyles } from '../../style/DisplayStyle';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { useSpring, animated } from 'react-spring'

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

    const [fadein, setFadein] = useSpring(() => ({ opacity: 0 }));

    const [open, setOpen] = useState(-1);
    const onOpenDialog = (i: number) => {
        // console.log(i);
        setOpen(i);
    }
    const onCloseDialog = () => {
        setOpen(-1);
    }
    const handleClose = () => {
        setOpen(-1);
    }

    useEffect(() => {
        setFadein({ opacity: 1, config: {friction: 200 } });
    }, []);

    return (
        <>
            <Grid container className={classes.container}>
                {data.map((item, index) => (
                    <Grid item className={classes.item} key={index}>
                        <animated.div style={fadein}>
                            <img src={item.img} onClick={() => onOpenDialog(index)}/>
                            <Modal
                                open={index === open}
                                onClose={onCloseDialog}
                                closeAfterTransition
                                BackdropProps={{
                                    timeout: 600,
                                }}>
                                <Fade in={index === open}>
                                    <div className={classes.modal}>
                                        <img src={item.modal} />
                                        <Button style={{margin:'1em', textAlign:'center', color: '#FFFFFF'}} onClick={handleClose}>✕ close</Button>
                                    </div>
                                </Fade>
                            </Modal>
                            <p>{item.title} </p>
                        </animated.div>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}