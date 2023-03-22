import { Modal } from "@mui/material";
import React from "react";

const ItemModal = (open, setModalOpen) => {
  return (
    <Modal
      open={open}
      onClose={() => setModalOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div>
        Item modal
      </div>
    </Modal>
  );
};

export default ItemModal;
