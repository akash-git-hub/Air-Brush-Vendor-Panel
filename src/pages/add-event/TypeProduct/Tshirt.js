import React from 'react'
import { Button, Box, Grid, InputLabel, OutlinedInput, Stack, Typography } from "@mui/material";
import FileUpload from 'themes/overrides/FileUpload';
const Tshirt = () => {
    return (
        <>
            <Box container className="T-shirtPanel" sx={{ marginTop: '10px' }}>
                <Typography variant="h6">T-Shirt</Typography>
                <Grid container spacing={2} >
                    <Grid item xs={2}>
                        <FileUpload id='ShirtID' placeholder="Product Image" />
                    </Grid>
                    <Grid item xs={10}>
                        <Grid container spacing={2} >
                            <Grid item xs={2}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="event-stock">Quantity / Stock</InputLabel>
                                    <OutlinedInput
                                        id="event-stock"
                                        type="number"
                                        value='Socks'
                                        name="stock"
                                        placeholder="Enter event name"
                                        fullWidth
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={10}>
                                <Grid container spacing={2}>
                                    <Grid item xs={2}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor='event-size'>Size</InputLabel>
                                            <OutlinedInput
                                                id='event-size'
                                                type="text"
                                                name='size'
                                                value='size'
                                                placeholder="Size"
                                                fullWidth
                                            />
                                            <Button
                                                fullWidth
                                                size="large"
                                                variant="contained"
                                                color="secondary"
                                            >
                                                Remove
                                            </Button>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Button
                                            fullWidth
                                            size="large"
                                            variant="contained"
                                            color="primary"
                                            style={{ marginTop: '1.6rem' }}>
                                            Size
                                        </Button>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Tshirt
