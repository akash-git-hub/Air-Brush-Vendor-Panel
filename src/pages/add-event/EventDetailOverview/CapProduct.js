import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

export const CapProduct = () => {
  return (
    <>
      <Box style={{
        padding: '10px 0px',
        borderBottom: '1px solid #ddd'
      }}>
        <Grid container>
          <Grid item xs={2}>
            <img
              src="https://rukminim2.flixcart.com/image/850/1000/xif0q/cap/c/y/m/free-latest-side-ny-baseball-cap-highever-original-imagnm8fvyf9jbpv.jpeg?q=90&crop=false"
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
                <Typography variant="h6" component="h6" sx={{ mb: 1, }}>Cap</Typography>
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
            <Grid container>
              <Grid item xs={2}>
                <Typography variant="h5" component="h5" sx={{ mb: 0, }}>Color</Typography>
              </Grid>
              <Grid item xs={10}>
                <Grid container>
                  <Grid item >
                    <Box
                      sx={{
                        border: "1px solid #000",
                        height: "25px",
                        width: "25px",
                        mr:3,
                        mb:1
                      }}
                    ></Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
