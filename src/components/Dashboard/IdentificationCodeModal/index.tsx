import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import Button from "@mui/material/Button/Button";
import React, { FC, useEffect, useState } from "react";

interface IProps {
  isOpen: boolean;
  identificationCode: string;
}

const IdentificationCodeModal: FC<IProps> = (props) => {
  const { isOpen, identificationCode } = props;

  const [show, setShow] = useState(isOpen);

  const handleClose = () => {
      setShow(false);
      localStorage.setItem('hasWon', 'null');
  }

  useEffect(() => {
    setShow(isOpen);
  }, [isOpen]);

  return (
    <Dialog
      open={show}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle className={"modal-title"}>Eyniləşdirmə kodu</DialogTitle>
      <DialogContent className={"modal-content"}>
        {identificationCode} kodunu istifadə edərək qazandığınız hədiyyəni əldə
        edə bilərsiniz!
      </DialogContent>
      <DialogActions className={"modal-actions"}>
        <Button variant="outlined" onClick={handleClose}>
          Bağla
        </Button>
        <Button variant="contained" onClick={handleClose}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default IdentificationCodeModal;
