import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

function AddItem({ isShow, change, submit, item }) {
  let formList = null;
  if (isShow) {
    formList = (
      <form>
        <Grid
          form
          maxWidth="md"
          sx={{
            margin: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem 0.2rem",
            borderRadius: "5px",
            boxShadow: "0 0 18px 2px rgba(0,0,0,0.5)",
          }}
        >
          <Grid item xs={9} sx={{ alignSelf: "center" }}>
            <TextField
              autoFocus
              variant="standard"
              id="item-name"
              label="Add New Item ..."
              sx={{ width: "100%", height: "100%", alignSelf: "center" }}
              value={item}
              onChange={change}
            />
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              alignSelf: "center",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <IconButton color="primary" aria-label="submit" onClick={submit}>
              <CheckCircleRoundedIcon sx={{ fontSize: "3.2rem" }} />
            </IconButton>
          </Grid>
        </Grid>
      </form>
    );
  }

  return formList;
}

export default AddItem;
