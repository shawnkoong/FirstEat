import React from "react";
import { Box, Card, Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/orderReducer";

const OrderDetailModal = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.order.selected);
  const selectedOrder = useSelector((state) => state.order.selectedOrder);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "clamp(40%, 800px, 70%)",
    bgcolor: "background.paper",
    p: 4,
  };

  const handleClose = (e) => {
    e.stopPropagation();
    dispatch(closeModal());
  };

  return (
    <Modal open={selected} onClose={(e) => handleClose(e)}>
      <Card sx={style}>
        <Box>
          <div>Order Detail Modal</div>
        </Box>
      </Card>
    </Modal>
  );
};

export default OrderDetailModal;
