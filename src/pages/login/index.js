import React from "react";
import Grid from "@mui/material/Grid";
import Log from "../../img/log.jpg";
import { blue } from "@mui/material/colors";
import { grey } from "@mui/material/colors";
import { TextField } from "@mui/material";

export const Login = () => {
  return (
    <Grid
      container
      direction="row"
      sx={{
        height: "100%",
      }}
    >
      <Grid xs={7} sx={{ height: "100%" }}>
        <img
          src={Log}
          alt=""
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </Grid>
      <Grid xs={5} sx={{ backgroundColor: blue[400] }}>
        {/* cuadro negro datos */}
        <Grid></Grid>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          sx={{
            backgroundColor: grey[300],
            // border: 1,
            // borderColor: "white",
            // borderRadius: 2,
          }}
        />
      </Grid>
    </Grid>
  );
};
