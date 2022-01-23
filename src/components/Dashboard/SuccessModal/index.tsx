import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import Button from "@mui/material/Button/Button";
import React, { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import "./index.scss";

interface IProps {
  isOpen: boolean;
  earnedGift: string
}

const SuccessModal: FC<IProps> = (props) => {
  const history = useHistory();
  const { isOpen, earnedGift } = props;

  const [show, setShow] = useState(isOpen);

  const handleClose = () => setShow(false);

  const redirectToLogin = () => {
    localStorage.setItem('hasWon', 'true');
    history.push('/login');
  };

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
      <DialogTitle className={"modal-title"}>Təbriklər</DialogTitle>
      <DialogContent className={"modal-content"}>
        Təbrik edirik {earnedGift} qazandınız!
      </DialogContent>
      <DialogActions className={"modal-actions"}>
        <Button variant="contained" onClick={redirectToLogin}>
          Əldə et
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SuccessModal;
