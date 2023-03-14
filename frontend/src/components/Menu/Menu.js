import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import ItemCard from "../ItemCard/ItemCard";

const Menu = ({ menu }) => {
  const menu = [
    {
      id: 1,
      name: "Burgers",
      items: [
        {
          name: "All American Burger",
          price: 1550,
          imageURL: "https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_150,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_130,g_auto/iuycs3t4hhqhrcpgbs6k",
          description: "1/2 pound beef patty with bacon",
        },
        {
          name: "Vegetarian Burger",
          price: 1325,
          imageURL: "https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_150,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_130,g_auto/hnkdgs6ngddtxalavisy",
          description: "Gluten free veg patty with avocado",
        },
      ],
    },
    {
      id: 2,
      name: "Sides",
      items: [
        {
          name: "French Fries",
          price: 450,
          imageURL: "https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_150,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_130,g_auto/bi3fpbx095wza1dhaehh",
          description: "Extra crisp, served with House sauce",
        },
      ],
    },
    {
      id: 3,
      name: "Drinks",
      items: [
        {
          name: "Lemonade",
          price: 450,
          imageURL: "https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_150,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_130,g_auto/umyblufptefc1gsjv9oh",
          description: "Lemonade made with fresh lemons",
        },
      ],
    },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <Box display="flex" flexDirection="column" width="100%">
      {menu &&
        menu.map((category, i) => (
          <Box marginY="15px">
            <Typography variant="h5" fontWeight="bold" gutterBottom>{category.name}</Typography>
            <Grid container spacing={2}>
              {category.items.map((menuItem, j) => (
                <Grid item xs={12} sm={6} key={j}>
                  <Paper elevation={2}>
                    <ItemCard item={menuItem} />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
        {selectedItem}
    </Box>
  );
};

export default Menu;


// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import ItemCard from './ItemCard';
// import ItemModal from './ItemModal';

// function App() {
//   const [selectedItemId, setSelectedItemId] = useState(null);
//   const items = useSelector((state) => state.menu.items);

//   const handleItemCardClick = (itemId) => {
//     setSelectedItemId(itemId);
//   };

//   const handleModalClose = () => {
//     setSelectedItemId(null);
//   };

//   const selectedItems = items.filter((item) => item.id === selectedItemId);

//   return (
//     <div>
//       <h1>Menu</h1>
//       <div>
//         {items.map((item) => (
//           <ItemCard key={item.id} item={item} onClick={handleItemCardClick} />
//         ))}
//       </div>
//       {selectedItems.length > 0 && (
//         <ItemModal item={selectedItems[0]} onClose={handleModalClose} />
//       )}
//     </div>
//   );
// }

// export default App;
