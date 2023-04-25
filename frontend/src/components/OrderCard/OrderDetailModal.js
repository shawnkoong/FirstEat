import React from "react";
import { Box, Card, Modal, Typography, Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/orderReducer";
import ItemDisplayCard from "../ItemCard/ItemDisplayCard";

const OrderDetailModal = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.order.selected);
  const selectedOrder = useSelector((state) => state.order.selectedOrder);
  const timestamp = selectedOrder ? new Date(selectedOrder.timestamp) : null;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "clamp(40%, 800px, 70%)",
    bgcolor: "background.paper",
    p: 4,
    maxHeight: "90%",
    overflowY: "auto",
  };

  const handleClose = (e) => {
    e.stopPropagation();
    dispatch(closeModal());
  };

  return (
    <Modal open={selected} onClose={(e) => handleClose(e)}>
      <Card sx={style}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Typography variant="h5">Order Details</Typography>
          <Box display="flex" flexDirection="column" width="100%">
            <Box display="flex" justifyContent="flex-start">
              <Typography variant="p2">Ordered from</Typography>
            </Box>
            <Box display="flex" justifyContent="flex-start">
              <Typography variant="h5">
                {selectedOrder ? selectedOrder.restaurantName : ""}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="flex-start">
              <Typography variant="p2">Ordered at</Typography>
              <Typography variant="p2" sx={{ ml: 1 }}>
                {timestamp &&
                  `${
                    timestamp.getMonth() + 1
                  }/${timestamp.getDate()}/${timestamp.getFullYear()}`}
              </Typography>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Typography variant="h6">Items</Typography>
            <Box display="flex" flexDirection="column" width="100%">
              {selectedOrder &&
                selectedOrder.itemsOrdered.map((item, i) => (
                  <Box sx={{ my: 1 }} key={i}>
                    <ItemDisplayCard
                      item={item}
                      quantity={selectedOrder.quantityOrdered[i]}
                    />
                  </Box>
                ))}
            </Box>
            <Divider sx={{ my: 1 }} />
            <Box display="flex" justifyContent="flex-end" mr={2}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                Total: $
                {selectedOrder
                  ? (+selectedOrder.totalPrice / 100).toFixed(2)
                  : ""}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Card>
    </Modal>
  );
};

export default OrderDetailModal;
