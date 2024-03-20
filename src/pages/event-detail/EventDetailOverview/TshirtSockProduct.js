import React from 'react'
import { Box, Grid, Stack, Typography, } from "@mui/material";

export const TshirtSockProduct = ({ productImage, sizesArray, productQuantity, product_type }) => {
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
                <Typography variant="h6" component="h6" sx={{ mb: 1, }}>{product_type}</Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={2}>
                <Typography variant="h5" component="h5" sx={{ mb: 0, }}>Size</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6" component="h6" sx={{ mb: 1, }}>{sizesArray && sizesArray.join(" , ")}</Typography>
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
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
