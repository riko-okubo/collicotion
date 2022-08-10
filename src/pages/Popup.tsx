import { Button, Modal } from "@material-ui/core";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "../style/HomeStyle";
import emerald_rose from "../component/atoms/Image/emerald_rose.jpg";

type Props = {
  popupOpen: boolean;
  setPopupOpen: Dispatch<SetStateAction<boolean>>;
};

export const Popup = (props: Props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Modal open={props.popupOpen}>
      <div className={classes.popup}>
        <div className={classes.closeButton}>
          <Button onClick={() => props.setPopupOpen(false)}>✕</Button>
        </div>
        <h2>
          <span>NEW ITEM</span>
        </h2>
        <img src={emerald_rose} />
        <div className={classes.openPageButton}>
          <Button onClick={() => navigate("/Flowers")}>open↗</Button>
        </div>
      </div>
    </Modal>
  );
};
