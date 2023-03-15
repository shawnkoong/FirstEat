import {
  Box,
  Modal,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  IconButton,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addQuantity,
  closeModal,
  removeQuantity,
} from "../../store/menuReducer";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { addItem } from "../../store/cartReducer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "clamp(40%, 800px, 70%)",
  bgcolor: "background.paper",
  p: 4,
};

const ItemCardModal = () => {
  const dispatch = useDispatch(); // to use with cart reducer to add items to cart
  const selected = useSelector((state) => state.menu.selected);
  const selectedItem = useSelector((state) => state.menu.selectedItem);
  const quantity = useSelector((state) => state.menu.quantity);

  const handleClose = (e) => {
    e.stopPropagation();
    dispatch(closeModal());
  };

  const add = () => {
    dispatch(addQuantity());
  };

  const remove = () => {
    dispatch(removeQuantity());
  };

  const addToCart = () => {
    dispatch(addItem({ item: selectedItem, quantity: quantity }));
    dispatch(closeModal());
  };

  return (
    <Modal
      open={selected}
      onClose={(e) => handleClose(e)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card sx={style}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <CardMedia
            component="img"
            sx={{ width: 250, height: 200 }}
            image={
              selectedItem?.imageURL
                ? selectedItem.imageURL
                : "https://img.freepik.com/free-icon/fast-food_318-386969.jpg"
            }
            title={selectedItem?.name}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardContent>
              <Typography variant="h6" component="h2">
                {selectedItem?.name}
              </Typography>
              <Typography variant="subtitle1" component="h4" gutterBottom>
                $ {((selectedItem?.price / 100) * quantity).toFixed(2)}
              </Typography>
              <Typography sx={{ mt: 2 }}>
                {selectedItem?.description}
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <IconButton aria-label="remove" onClick={remove}>
                <RemoveIcon />
              </IconButton>
              <Typography mx={2}>{quantity}</Typography>
              <IconButton aria-label="add" onClick={add}>
                <AddIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <br />
        <Box
          sx={{
            display: "flex",
            height: "50px",
            width: "230px",
            justifyContent: "start",
            paddingLeft: "10px",
          }}
        >
          <Button
            variant="contained"
            disableElevation
            fullWidth
            startIcon={<ShoppingBasketIcon />}
            onClick={addToCart}
          >
            Add to bag: ${((selectedItem?.price / 100) * quantity).toFixed(2)}
          </Button>
        </Box>
      </Card>
    </Modal>
  );
};

export default ItemCardModal;
