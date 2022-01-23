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

import GameModal from "../GameModal";

interface IProps {
  isOpen: boolean;
}

const PopUp: FC<IProps> = (props) => {
  const { isOpen } = props;
  const [show, setShow] = useState(isOpen);
  const [gameOpen, setGameOpen] = useState(false);

  useEffect(() => {
    setTimeout(
      function () {
        setShow(true);
      },
      1000 /// milliseconds = 1 seconds
    );
  }, []);

  const handleClose = () => setShow(false);
  const startGame = () => {
    setShow(false);
    setGameOpen(true);
  };
  return (
    <>
      <Dialog
        open={show}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className="modal-title">Sərfəli təklif!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            X oyunu oyna və məhsulda 10% endirim əldə et.
          </DialogContentText>
        </DialogContent>
        <DialogActions className="modal-actions">
          <Button variant="outlined" onClick={handleClose}>
            Bağla
          </Button>
          <Button variant="contained" onClick={startGame}>
            Oyuna başla
          </Button>
        </DialogActions>
      </Dialog>
      <GameModal isOpen={gameOpen} />
    </>
  );
};

export default PopUp;
