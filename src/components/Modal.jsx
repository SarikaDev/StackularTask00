import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useCallback } from "react";

const Modal = ({ modalData, setModalData }) => {
  const handleClose = useCallback(() => {
    setModalData((prev) => ({open:!prev}));
  }, [setModalData]);
  return (
    <Dialog onClose={handleClose} open={modalData.open}>
      <DialogTitle
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          bgcolor: "#ff9900",
          color: "#fff",
        }}
      >
        {modalData.title}
      </DialogTitle>
      <DialogContent sx={{ m: 2 }}>
        <DialogContentText>
        {modalData.content}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ pr: 5 }}>
        <Button onClick={handleClose} variant="contained">
          Disagree
        </Button>
        <Button onClick={handleClose} variant="contained">
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
