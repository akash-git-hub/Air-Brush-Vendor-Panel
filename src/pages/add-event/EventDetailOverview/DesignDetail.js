import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

export const DesignDetail = () => {
    return (
        <>
            <Box style={{
                padding: '10px 0px',
                borderBottom: '1px solid #ddd'
            }}>
                <Grid container >
                    <Grid item xs={2}>
                        <img
                            src="https://img.freepik.com/premium-vector/bg-gb-creative-abstract-logo_649646-171.jpg"
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

                                <Typography variant="h6" component="h6" sx={{ mb: 1, }}>Background Design</Typography>
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
                                                mr: 3,
                                                mb: 1
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
