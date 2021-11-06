import { Box } from "@mui/system";
import React from "react";

import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

function Item({ item, ...props }) {
  return (
    <Box
      sx={{
        width: "80%",
        margin: "2rem auto",
        display: "flex",
        padding: "0 5px",
        borderRadius : 1.6,
        justifyContent: "space-between",
        boxShadow: "0 0 18px 2px rgba(0,0,0,0.25)",
        backgroundColor: "#f5ffff",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <p sx={{ cursor: "pointer" }}>{item.title}</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DeleteRoundedIcon
          sx={{ cursor: "pointer", mr: 1 }}
          color="primary"
          onClick={props.delete}
        />
        <EditRoundedIcon
          sx={{ cursor: "pointer", ml: 1 }}
          color="primary"
          onClick={props.edit}
        />
      </div>
    </Box>
  );
}

export default Item;
