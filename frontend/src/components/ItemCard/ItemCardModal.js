import { Box, Modal, Typography, Button } from "@mui/material";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "clamp(50%, 100px, 90%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ItemCardModal = ({open, handleClose}) => {
    console.log(open)
  return (
    <Modal
      open={open}
      onClose={handleClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
  );
};

export default ItemCardModal;


// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addItemToCart } from './cartSlice';

// function ItemModal() {
//   const [quantity, setQuantity] = useState(1);
//   const dispatch = useDispatch();
//   const selectedItem = useSelector((state) => state.menu.selectedItem);

//   const handleQuantityChange = (event) => {
//     setQuantity(parseInt(event.target.value));
//   };

//   const handleAddToCartClick = () => {
//     dispatch(addItemToCart({ ...selectedItem, quantity }));
//   };

//   return (
//     <div>
//       <h2>{selectedItem.name}</h2>
//       <p>{selectedItem.description}</p>
//       <p>{selectedItem.price}</p>
//       <input type="number" value={quantity} onChange={handleQuantityChange} />
//       <button onClick={handleAddToCartClick}>Add to Cart</button>
//     </div>
//   );
// }

// export default ItemModal;
