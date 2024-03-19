import React from 'react'
import { Box, Grid, Stack, Typography, } from "@mui/material";

export const ShirtSockProduct = () => {
    return (
        <>
            <Box style={{
                padding: '10px 0px',
                borderBottom: '1px solid #ddd'
            }}>
                <Grid container>
                    <Grid item xs={2}>
                        <img
                            src="https://marketplace.canva.com/print-mockup/bundle/E9Me4jcyzMX/fit:female,pages:double-sided,surface:marketplace/product:171618,surface:marketplace/EAFLsJd5odY/1/0/933w/canva-black-bold-logo-text-graphic-t-shirt-xBtZhbBcHcY.png?sig=64788a1a4a704de7ec24a4b06ed394d5&width=800"
                            alt=""
                            className="img-fluid"
                            style={{
                                width: "7vw",
                                height: "7vw",
                            }}
                        />
                    </Grid>

                    <Grid item xs={10}>
            <Grid container>
              <Grid item xs={2}>
                <Typography variant="h5" component="h5" sx={{ mb: 0, }}>Type</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6" component="h6" sx={{ mb: 1, }}>T-shirt</Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={2}>
                <Typography variant="h5" component="h5" sx={{ mb: 0, }}>Size</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6" component="h6" sx={{ mb: 1, }}>S, M, L, XL</Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={2}>
                <Typography variant="h5" component="h5" sx={{ mb: 0, }}>Quantity</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6" component="h6" sx={{ mb: 1, }}>30</Typography>
              </Grid>
            </Grid>
          </Grid>
                </Grid>
            </Box>
        </>
    )
}
