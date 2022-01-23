import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import Button from "@mui/material/Button/Button";
import React, { FC, useEffect, useState } from "react";

import "./index.scss";

import Wheel from "../Wheel";

interface IProps {
  isOpen: boolean;
}

const GameModal: FC<IProps> = (props) => {
  const { isOpen } = props;

  const [show, setShow] = useState(isOpen);

  const handleClose = () => setShow(false);

  useEffect(() => {
    setShow(isOpen);
  }, [isOpen]);

  const items = [
    "Pizzas",
    "Sandwiches",
    "Salads",
    "Soup",
    "Japanese food",
    "Pastas",
  ];

  return (
    <Dialog
      open={show}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle className={'modal-title'}>Oyna və seçilmiş endirimlərdən yararlan!</DialogTitle>
      <DialogContent className={"modal-content"}>
        <Wheel items={items} />
      </DialogContent>
    </Dialog>
  );
};

export default GameModal;
