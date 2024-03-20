import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

export const CapProduct = ({ productImage, colorsArray, productQuantity }) => {
  return (
    <>
      <Box style={{
        padding: '10px 0px',
        borderBottom: '1px solid #ddd'
      }}>
        <Grid container>
          <Grid item xs={2}>
            <img
              src={productImage}
              alt=""
              className="img-fluid"
              style={{
                minwidth: "100%",
                minheight: "100%",
                width: '140px',
                height: '140px',
                objectFit: 'contain',
                padding: '10px',
                background: '#e6f4ff'
              }}
            />
          </Grid>
          <Grid item xs={10}>
            <Grid container>
              <Grid item xs={2}>
                <Typography variant="h5" component="h5" sx={{ mb: 0, }}>Type</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6" component="h6" sx={{ mb: 1, }}>Cap</Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={2}>
                <Typography variant="h5" component="h5" sx={{ mb: 0, }}>Quantity</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6" component="h6" sx={{ mb: 1, }}>{productQuantity}</Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={2}>
                <Typography variant="h5" component="h5" sx={{ mb: 0, }}>Color</Typography>
              </Grid>
              <Grid item xs={10}>
                <Grid container>
                  {colorsArray && colorsArray.length && colorsArray.map((c) =>
                    <Grid item >
                      <Box
                        sx={{
                          border: "1px solid #000",
                          height: "25px",
                          width: "25px",
                          mr: 3,
                          mb: 1,
                          background: c
                        }}
                      ></Box>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
